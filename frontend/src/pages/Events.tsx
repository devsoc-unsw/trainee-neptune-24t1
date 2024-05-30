import React from 'react';

import NavigationBar from '../components/Navigation';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

const socialSession = {
  img: 'https://scontent.fsyd3-2.fna.fbcdn.net/v/t39.30808-6/444502067_435924732481086_7098541123001912659_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fkFdtO6mjpcQ7kNvgGcwLeb&_nc_ht=scontent.fsyd3-2.fna&oh=00_AYBveWL3D1mU5rlSwsEdvunQyom81R6SETjtzIqgCgC96A&oe=6658E04B',
  title: 'Weekly Social Sessions',
  description: 'Gather O everyone, for our beloved weekly social sessions hath withstood the fortitude of time⏳and hath henceforth revived!! 🙌 𝐓𝐇𝐄 𝐖𝐄𝐄𝐊𝐋𝐘 𝐒𝐎𝐂𝐈𝐀𝐋 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐒: An engagement participated by a multitude of kindred spirits 👻 whom doth revel in fellowship at the table, battling the cunning scrolls of Puzzle 📜. Puzzlers from far and wide convene to discourse various topics, engage mirthfully in board games 🎲, relish in delectable provisions 🍭, and unriddle secret ciphers. Bring thy fellow companions hither and test thy wits!🔎 To be informed of future social sessions, get the @social sessioner role in ⁠#rules-and-roles on the Discord server!',
  url: 'https://www.facebook.com/events/1426532081562135/',
  date: 'Every Monday'
}

const puzzledPint = {
  img: 'https://scontent.fsyd11-1.fna.fbcdn.net/v/t39.30808-6/436211022_429080136498879_2336429469247562648_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ugUUAq4O4nQQ7kNvgFOgCSc&_nc_ht=scontent.fsyd11-1.fna&oh=00_AYBeSopUEYxSAAZUFoFs2z9Gb4NpyREFnA0N_HGPCXCIVw&oe=665E55FD',
  title: 'Puzzled Pint',
  description: 'Puzzled Pint is a non-competitive and social puzzle-solving event! Surround yourself in a cosy atmosphere while working on themed puzzles, and maybe even mingle with puzzlers from other unis, like USYD Puzzlesoc and UTS PuzzleSoc~~ This month\'s theme is 📚🎮 Bart Simpson 🛹❗ 🔗 Visit http://www.puzzledpint.com/ for more information and the location puzzle—the answer reveals the location!',
  url: 'https://fb.me/e/4sz0L1vr9',
  date: 'Second Tuesday Every Month'
}

function Events () {
  const events = [];
  events.push(socialSession);
  events.push(puzzledPint);

  const scrollTarget = React.useRef<HTMLDivElement>(null);
  const scroll = () => {
    if (scrollTarget.current) {
      scrollTarget.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavigationBar/>
      <div className="flex flex-col justify-center h-screen bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://scontent.fsyd11-1.fna.fbcdn.net/v/t39.30808-6/314072869_1068596770468707_2945606359237085853_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DtTh77Uk4m0Q7kNvgFeMbvl&_nc_ht=scontent.fsyd11-1.fna&oh=00_AYDexxmt2PKgLwAC45ySgFKqer3lM9cXcdvk_OtmVfmi6A&oe=665A38B3')" }}>
        <div className="font-bold self-center">
          <p className="bg-gradient-to-r from-cyan-100 to-puzzleBlue-light w-max text-3xl px-3 py-px my-2">EVENTS</p>
          <h1 className="text-5xl text-white">WHAT'S NEXT?</h1>
        </div>
        <FontAwesomeIcon onClick={scroll} className="w-max relative top-1/3 left-1/2 text-white hover:text-gray-100 cursor-pointer drop-shadow animate-bounce" icon={faCircleChevronDown} size="2xl"/>
      </div>

      <div ref={scrollTarget}>
        <SectionHeader heading="SCHEDULE"/>
      </div>
        <div className="flex flex-col items-center w-full my-5">
        {events.map((event, index) => (
          <div key={index} className="flex flex-row w-4/5 my-2 p-2 bg-gray-100 dark:bg-slate-700 rounded-lg font-raleway transition duration-200">
            <img className="max-w-96 min-h-56 aspect-video place-self-center rounded p-1" src={event.img} alt="banner"/>
            <div className="max-h-56 flex flex-col text-left pl-5 pr-2 dark:text-slate-100 transition duration-200">
              <h2 className="font-bold text-2xl pt-2">{event.title}</h2>
              <p className="overflow-y-auto mt-2">{event.description}</p>
              <br></br>
              <div className="flex justify-between items-center my-1">
                <div className="hover:text-transparent hover:bg-gradient-to-r from-cyan-200 to-puzzleBlue hover:bg-clip-text"><strong>WHEN </strong>| {event.date}</div>
                <a className="flex justify-end items-baseline cursor-pointer text-puzzleBlue underline-offset-2 decoration-1 decoration-puzzleBlue hover:underline hover:text-puzzleBlue-dark hover:decoration-puzzleBlue-dark" href={event.url} target="_blank">
                  <span className="mx-1">Find out more</span>
                  <FontAwesomeIcon className="text-puzzleBlue" icon={faAnglesRight} size="xs"/>
                </a>
              </div>
            </div>
          </div>
        ))}
        </div>
      <Footer/>
    </>
  );
}

export default Events;
