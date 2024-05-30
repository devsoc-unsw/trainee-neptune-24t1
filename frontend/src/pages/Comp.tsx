import React from 'react';

import Footer from '../components/Footer';
import NavigationBar from '../components/Navigation';
import SectionHeader from '../components/SectionHeading';

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
      {day === 'M' && <Monday/>}
      {day === 'W' && <Wednesday/>}
      {day === 'F' && <Friday/>}
      <Footer/>
    </>
  );
}

// most recent Monday puzzle
function Monday () {

  const examplePuzzle = {
    title: 't2_w1',
    img: 'https://scontent.fsyd11-1.fna.fbcdn.net/v/t39.30808-6/435065715_407911401949086_8469336516791600997_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QDj4tdKIGZQQ7kNvgF_9ELZ&_nc_ht=scontent.fsyd11-1.fna&oh=00_AYBkmEj01S0jeIe_ekCGtwADkEJGhEV_w6UJgBcTLuceVg&oe=66575C5A',
    answer: 'bonding'
  }

  return (
    <Form {...examplePuzzle} />
  )
}

// most recent Wednesday puzzle
function Wednesday () {
  return (
    <></>
  )
}

// most recent Friday puzzle
function Friday () {
  return (
    <></>
  )
}

const Form: React.FC<Puzzle> = ({ title, img, answer }) => {
  const [name, setName] = React.useState('');
  const [userAnswer, setUserAnswer] = React.useState('');

  const submit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!name) {
      // temporary
      alert('please enter a name');
      return;
    }
    if (answer !== answer) {
      // temporary
      alert('wrong');
      return;
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
      <div className="flex flex-row justify-center p-10">
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
