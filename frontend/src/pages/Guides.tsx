import React from 'react';

import Footer from '../components/Footer';
import NavigationBar from '../components/Navigation';
import SectionHeader from '../components/SectionHeading';
import ImageCarousel from '../components/Carousel'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from "@fortawesome/fontawesome-common-types"
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faBorderStyle } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

function Guides () {
  const [puzzleType, setPuzzleType] = React.useState('rebus');

  const switchGuide = (event: React.SyntheticEvent, type: string) => {
    setPuzzleType(type);
  };

  return (
    <>
      <NavigationBar/>
      <div className="mt-10">
        <button className={`rounded-l-lg py-2 px-4 transition duration-300 ${puzzleType === 'rebus' ? 'bg-blue-100' : 'bg-gray-100 hover:bg-blue-100'}`} onClick={e => switchGuide(e, 'rebus')}>Rebus</button>
        <button className={`border-x py-2 px-4 transition duration-300 ${puzzleType === 'logic' ? 'bg-blue-100' : 'bg-gray-100 hover:bg-blue-100'}`} onClick={e => switchGuide(e, 'logic')}>Logic</button>
        <button className={`border-r py-2 px-4 transition duration-300 ${puzzleType === 'cryptic' ? 'bg-amber-100' : 'bg-gray-100 hover:bg-amber-100'}`} onClick={e => switchGuide(e, 'cryptic')}>Cryptic</button>
        <button className={`rounded-r-lg py-2 px-4 transition duration-300 ${puzzleType === 'minipuzz' ? 'bg-pink-100' : 'bg-gray-100 hover:bg-pink-100'}`} onClick={e => switchGuide(e, 'minipuzz')}>Minipuzz</button>
      </div>
      {puzzleType === 'rebus' && <Rebus/>}
      {puzzleType === 'logic' && <Logic/>}
      {puzzleType === 'cryptic' && <Cryptic/>}
      {puzzleType === 'minipuzz' && <Minipuzz/>}
      <Footer/>
    </>
  );
}

function Rebus() {
  return (
    <div className="flex flex-col items-center">
      <SectionHeader heading="REBUS" />
      <div className="flex flex-col w-3/5 font-raleway text-left text-xl p-5">
        <p>A rebus is a type of visual puzzle where words and images are used in abstract ways to represent an answer which are usually common phrases, idioms and can even be a single word. These puzzles typically target visual perception skills.</p>
        <p className="py-3">To solve a rebus, some general things to look out for are position, size, direction, colour, and style.</p>
      </div>

      <div className="grid grid-cols-3 gap-16 w-3/5 mt-5 p-5">
        <DisplayComponents img={faLocation} component="Position:" text="The way words or images are positioned can cue prepositions such as in, on, above, below, over, and under which can be a part of the final answer."/>
        <DisplayComponents img={faArrowsLeftRight} component="Size:" text="If words or objects are unusually bigger or smaller, the size may be part of the final answer."/>
        <DisplayComponents img={faDirections} component="Direction:" text="Take note of the direction a word is running along. For example, if words are running vertically, you may need to include the word 'up' or 'down' in your final answer."/>
        <DisplayComponents img={faSquare} component="Colour:" text="If a word or object is randomly/the only one that's coloured, then there is a high chance that the colour will be part of the final answer."/>
        <DisplayComponents img={faBorderStyle} component="Style:" text="There are a variety of ways objects and words can be presented. For example, if there is only half an image, then most likely you only need to include half of what it represents."/>
        <DisplayComponents img={faMicrophone} component="Auditory:" text="Sometimes you may need to read the words out loud to realise it sounds like another word which may be the answer."/>
      </div>

      <div className="mt-16"></div>
      <SectionHeader heading="Examples"/>
      <div className="flex flex-col place-self-center w-4/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-16 place-self-center text-left">
          <DisplayExample
            solution="Notice that there is a running star and a tee shirt. We can shorten the tee shirt to just 'tee' to get 'a running star' + 'tee'. Combining these together we get 'a running start' which is our final answer."
            img="https://scontent.fsyd3-2.fna.fbcdn.net/v/t39.30808-6/427881775_376524211754472_3977462887851308538_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2wQj5v-Fh4YQ7kNvgFSNQhX&_nc_ht=scontent.fsyd3-2.fna&oh=00_AYCspsLu8AQ7UTVXbuDuNSrUQomf4UqXVwv4dM4y5IbqnQ&oe=6656AD54"
          />
          <DisplayExample
            solution="The ellipse outside 'The Rosie' resembles a ring. Now thinking of some prepositions, we find that 'around' works the best as this gives us 'Ring around The Rosie' which is our final answer."
            img="https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/431368313_391607733579453_5627088026296427759_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Egc4P2X8g68Q7kNvgFbmKTr&_nc_ht=scontent.fsyd3-1.fna&oh=00_AYAWNZeCC05wI2t63BHQAdWzMNl9u41hn4-twd9BdBuH7w&oe=6656AE15"
          />
          <DisplayExample
            solution="We can see that there is a bee on top of a bell. However that doesn't straight away give us anything so we must look closer to the noise symbols. This tells us it is actually a bee on ding. If we write this out we get bonding, which is our final answer."
            img="https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/435065715_407911401949086_8469336516791600997_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QDj4tdKIGZQQ7kNvgH86JfJ&_nc_ht=scontent.fsyd3-1.fna&oh=00_AYCtf9B8OMH05wwqAB2898nXFQBed-vfUq_ZOl78DA4ERg&oe=6656B39A"
          />
        </div>
      </div>
      <div className="mb-20"></div>
    </div>
  );
}

function DisplayComponents ({ img, component, text }: {img: IconDefinition, component: string, text: string }) {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-blue-50 border-blue-300 border pt-16 pb-6 mb-5"><FontAwesomeIcon className="place-self-center size-20 mb-10" icon={img}/></div>
      <div className="text-left font-raleway">
        <p className="text-lg text-center"><b>{component}</b></p>
        <p>{text}</p>
      </div>
    </div>
  )
}

function Logic () {
  return (
    <div className="flex flex-col items-center">
      <SectionHeader heading="LOGIC"/>
      <div className="flex flex-col w-3/5 font-raleway text-left text-xl p-5 m-8">
          <p>Logic puzzles come with a variety of different rules and styles. These aim to challenge deductive reasoning and logic skills where you narrow different possibilities or aim to make the best choice out of many possibilities.</p>
        </div>
    </div>
  );
}

function Cryptic () {
  return (
    <div className="flex flex-col">
      <SectionHeader heading="CRYPTIC"/>
      <div className="flex flex-col w-3/5 place-self-center font-raleway text-left text-xl p-5">
        <p>A cryptic clue is similar to a riddle but contains 3 important parts: definition, cue and the leftovers. The definition is usually a word (or more) either at the start or the end of a clue. Cue words or phrases hint at what you should do with leftovers to obtain part of or the final answer. Cryptics usually target pattern recognition</p>
        <p className="py-3">Common cues used are:</p>
        <br></br>
        <p><b>Anagrams:</b></p>
        <p>Words such as "mixed", "confused", "unsteady" can cue an anagram where you would need to rearrange a word to form another.</p>
        <br></br>
        <p><b>Hidden Answers:</b></p>
        <p>Words can sometimes be hidden inside other words or phrases. Some cues to this are "grips", "eaten" or "swallowed"</p>
        <br></br>
        <p><b>Homophones:</b></p>
        <p>Words relating to sound or speech such as "heard", "said", "yelled" can signal to look for homophones.</p>
        <br></br>
        <p><b>Reversals:</b></p>
        <p>Words like "back", "rewind" or "mirrored" can cue to reverse the order of words.</p>
        <br></br>
        <p><b>Deletions:</b></p>
        <p>Words can also cue to remove parts of a word such as "headless" or "no tail" which remove the first and last letter respectively.</p>
      </div>
      <div className="mt-16"></div>

      <SectionHeader heading="Examples"/>
      <div className="flex flex-col place-self-center w-4/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-16 place-self-center text-left">
          <DisplayExample solution="'Unsalted' is the cue, and from chemistry we know that salt is NaCl. Then we notice that the word barnacle contains the letters from NaCl. So we remove those letters from barnacle which leaves us with 'bare'. This aligns with the definition word of 'plain' and hence the answer is 'bare'." img="https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/428613497_381327351274158_7429692494230726708_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Wg02bgWEeJcQ7kNvgH560Mr&_nc_ht=scontent.fsyd3-1.fna&oh=00_AYBZjrt2_7__Z7mStIpvdOkUuMYTS4Pz6NxkGRZTE0YOgw&oe=6656086C"/>
          <DisplayExample solution="Notice that 'My name is...' is specifically in quotes. Another way of saying this is 'I'm'. Now, another word for sender is 'poster' and when we combine these together, we get 'imposter' which aligns with the definition word 'fake' and hence is our final answer." img="https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/430172762_385103177563242_2835744654873056541_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XwEQiAzpaqAQ7kNvgGqaaPP&_nc_ht=scontent.fsyd3-1.fna&oh=00_AYDtviZx3dJbWEl49hoK0Wm7JO6BOsirG4VCzqKKPKx_iQ&oe=66560FE9"/>
          <DisplayExample solution="'Starting' is a cue for using initials and hence taking the 'two starting' initials of 'searching' we get 'se'. Now we need 'an antidote' AFTER 'se'. Another word for antidote is 'cure' and when we piece them together, we get 'secure' which fits the defintion word 'obtain' and is our final answer" img="https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/433501398_400766139330279_6373752198853041375_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MIMVSCkM4RcQ7kNvgGYAG5h&_nc_ht=scontent.fsyd3-1.fna&oh=00_AYCifcSJQ1_34_5mA_20zXqwHBXprWQQPdLtne9QyHHqAA&oe=665629D7"/>
        </div>
      </div>
      <div className="mb-20"></div>

    </div>
  );
}

function DisplayExample({ solution, img }: { solution:string, img:string }) {
  return (
    <div className="flex flex-col">
      <img src={`${img}`}></img>
      <details className="mt-3 bg-slate-100 p-5">
        <summary className="hover:cursor-pointer">Show solution</summary>
        <p className="ml-5 mr-3 mt-1"><i>{solution}</i></p>
      </details>
    </div>
  )
}

function Minipuzz () {
  return (
    <div className="flex flex-col">
      <SectionHeader heading="MINIPUZZ"/>
      <div className="flex flex-col w-3/5 place-self-center font-raleway text-left text-xl p-10 m-8">
       <p>Minipuzzes, short for mini puzzles can be any type of puzzle not limited to just rebus, logics or cryptics. These can be a combination of many puzzles types or can be just one type.</p>
      </div>
      <div className="mb-20"></div>
    </div>
  );
}


export default Guides;
