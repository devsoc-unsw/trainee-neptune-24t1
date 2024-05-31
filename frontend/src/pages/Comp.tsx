import React from 'react';
import Footer from '../components/Footer';
import NavigationBar from '../components/Navigation';
import SectionHeader from '../components/SectionHeading';

const SERVER_URL = "http://localhost:5005"

interface Puzzle {
  title: string,
  img: string,
  answer: string
}

function Comp () {
  const [day, setDay] = React.useState('M');

  const switchDay = (event: React.SyntheticEvent, weekday: string) => {
    setDay(weekday);
  };


  return (
    <>
      <NavigationBar/>

      <div className="mt-10">
        <button className={`rounded-l-lg py-2 px-4 transition duration-300 ${day === 'M' ? 'bg-blue-50' : 'bg-gray-100 hover:bg-blue-100'}`} onClick={e => switchDay(e, 'M')}>Monday</button>
        <button className={`border-x py-2 px-4 transition duration-300 ${day === 'W' ? 'bg-yellow-50' : 'bg-gray-100 hover:bg-yellow-100'}`} onClick={e => switchDay(e, 'W')}>Wednesday</button>
        <button className={`rounded-r-lg py-2 px-4 transition duration-300 ${day === 'F' ? 'bg-pink-50' : 'bg-gray-100 hover:bg-pink-100'}`} onClick={e => switchDay(e, 'F')}>Friday</button>
      </div>
      {day === 'M' && <Monday day={day}/>}
      {day === 'W' && <Wednesday day={day}/>}
      {day === 'F' && <Friday day={day}/>}
      <Footer/>
    </>
  );
}

// most recent Monday puzzle
function Monday ({day} : {day: string}) {

  const example = {
    title: 't2_w1',
    img: 'https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/441944574_437182145688678_9031183862831818359_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Wsyh5UH7WYMQ7kNvgG8o3G-&_nc_ht=scontent.fsyd3-1.fna&oh=00_AYB8GGLHuneV46WuaFuf-VpP71Uid4_u64GW1Z2Nr7DJ1w&oe=665EFFB3',
    answer: 'excellency'
  }

  return (
    <Form {...example} day={day} />
  )
}

// most recent Wednesday puzzle
function Wednesday ({day} : {day: string}) {
  const exampleCryptic = {
    title: 't2_w1',
    img: 'https://scontent.fsyd3-2.fna.fbcdn.net/v/t39.30808-6/442412072_437187545688138_6803202672391744398_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cSVx259SNWwQ7kNvgFhSr7p&_nc_ht=scontent.fsyd3-2.fna&oh=00_AYCrrLJDOz-F6pz8dNVslPjR1jwojNda0bcom8R5xd3lqQ&oe=665ED822',
    answer: 'cross'
  }

  return (
    <Form {...exampleCryptic} day={day} />
  )
}

// most recent Friday puzzle
function Friday ({day} : {day: string}) {
  const exampleMinipuzz = {
    title: '',
    img: '',
    answer: ''
  }

  return (
    <Form {...exampleMinipuzz} day={day} />
  )
}


const Form: React.FC<Puzzle & { day: string }> = ({ title, img, answer, day }) => {
  const [name, setName] = React.useState('');
  const [userAnswer, setUserAnswer] = React.useState('');

  const submit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (answer === '') {
      alert('Puzzle TBA');
      return;
    }
    if (!name) {
      // temporary
      alert('Please enter a name');
      return;
    }
    if (userAnswer !== answer) {
      // temporary
      alert('Incorrect submission');
      return;
    }

    try {
      const response = await fetch(SERVER_URL + '/comp/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, userAnswer, day}),
      });

      console.log(response);
      const result = await response.json();
  
      if (response.ok) {
        console.log('Submission received');
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }    
  }

  const reset = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setName('');
    setUserAnswer('');
  }

  return (
    <div className="flex flex-col justify-center dark:text-slate-100 transition duration-200">
      <SectionHeader heading={title}/>
      <div className="flex flex-col sm:flex-row justify-center p-4 sm:p-10">
        <img className="h-80 mx-5 rounded drop-shadow duration-100 hover:scale-105" src={img} alt="banner"/>
        <div className="flex flex-col justify-between text-left mx-5 font-raleway">
          <form className="flex flex-col text-left" onSubmit={submit}>
            <h2 className="text-xl font-bold my-2">Submission</h2>
            <label htmlFor="name">Your name</label>
            <input className="mb-2 px-1 py-2 bg-transparent border-b focus:outline-none focus:border-puzzleBlue" type="text" name="name" id="name" placeholder="John Doe" onChange={event => setName(event.target.value)} value={name} />
            <label htmlFor="submission">Your answer</label>
            <input className="mb-2 px-1 py-2 bg-transparent border-b focus:outline-none focus:border-puzzleBlue" type="text" name="submission" id="submission" placeholder="youranswerhere" onChange={event => setUserAnswer(event.target.value)} value={userAnswer} />
            <div className="flex flex-row justify-between my-2">
              <input className="m-1 px-2 h-8 max-w-28 rounded-md outline outline-puzzleBlue-light hover:bg-puzzleBlue-light font-bold cursor-pointer align-items-center" type="submit" value="SUBMIT"/>
              <input className="m-1 px-2 h-8 max-w-28 rounded-md outline outline-red-400 hover:bg-red-400 font-bold cursor-pointer" type="reset" value="RESET" onClick={reset} />
            </div>
          </form>
          <h2 className="my-2">If you answer correctly, you'll be the <b>[ ]th</b> correct submission!</h2>
        </div>
      </div>
      <SectionHeader heading="Leaderboard"/>
    </div>
  )
}

export default Comp;
