import React from 'react';

import NavigationBar from '../components/Navigation';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

function Events () {
  // const event = {
  //   banner:
  //   title:
  //   description:
  //   url:
  //   date: 
  // };

  // For testing, should link to backend later
  const event = {
    banner: 'https://scontent.fsyd11-2.fna.fbcdn.net/v/t39.30808-6/445687730_122156156618084186_3431698342416514101_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-8Z_JOTN6_IQ7kNvgGHipN9&_nc_ht=scontent.fsyd11-2.fna&oh=00_AYCLRybWd52O6JyZieU4rm1wDvsnPJzjfiwD2Nhs7LtHYw&oe=6654F1B7',
    title: 'PuzzleSoc x DevSoc Presents: A DEV-THEMED GAMES NIGHT',
    description: 'A DEV-THEMED GAMES NIGHT 🎮🧩\nCode your way to victory with our very cool dev-themed puzzles 🧩\nDebug your brain with mind-bending challenges, enjoy byte-sized board games, and indulge in an irresistible spread of snacks and refreshing drinks! 🥞🍵\n💥 Score AMAZING PRIZES including exclusive plushies and other awesome rewards through our raffle and by solving our puzzles 💥\n🎲 Board games will be available to play throughout the event 🎲',
    url: 'https://www.facebook.com/events/465687765949176/465687772615842/',
    date: '28 May 2024'
  }

  const socialSesh = {
    banner: 'https://scontent.fsyd3-2.fna.fbcdn.net/v/t39.30808-6/444502067_435924732481086_7098541123001912659_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fkFdtO6mjpcQ7kNvgGcwLeb&_nc_ht=scontent.fsyd3-2.fna&oh=00_AYBveWL3D1mU5rlSwsEdvunQyom81R6SETjtzIqgCgC96A&oe=6658E04B',
    title: 'Weekly Social Sessions',
    description: 'Gather O everyone, for our beloved weekly social sessions hath withstood the fortitude of time⏳and hath henceforth revived!! 🙌 𝐓𝐇𝐄 𝐖𝐄𝐄𝐊𝐋𝐘 𝐒𝐎𝐂𝐈𝐀𝐋 𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐒: An engagement participated by a multitude of kindred spirits 👻 whom doth revel in fellowship at the table, battling the cunning scrolls of Puzzle 📜. Puzzlers from far and wide convene to discourse various topics, engage mirthfully in board games 🎲, relish in delectable provisions 🍭, and unriddle secret ciphers. Bring thy fellow companions hither and test thy wits!🔎 To be informed of future social sessions, get the @social sessioner role in ⁠#rules-and-roles on the Discord server!',
    url: 'https://www.facebook.com/events/1426532081562135/',
    date: 'Every Monday'
  }

  const events = [];
  events.push(event);
  events.push(socialSesh);
  events.push(event);

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
        <FontAwesomeIcon onClick={scroll} className="w-max relative top-1/3 left-1/2 text-white hover:text-cyan-100 cursor-pointer drop-shadow animate-bounce" icon={faCircleChevronDown} size="2xl"/>
      </div>

      <div ref={scrollTarget}>
        <SectionHeader heading="SCHEDULE"/>
      </div>
      <div className="flex justify-center mt-5">
        <div className="flex flex-col w-4/5">
        {events.map((event, index) => (
          <div key={index} className="flex flex-row my-2 p-2 bg-gray-100 dark:bg-slate-700 rounded-lg font-raleway transition duration-200">
            <img className="max-w-96 min-h-56 aspect-video place-self-center rounded p-1" src={event.banner} alt="banner"/>
            <div className="max-h-56 flex flex-col text-left pl-5 pr-2 dark:text-slate-100 transition duration-200">
              <h2 className="font-bold text-2xl pt-2">{event.title}</h2>
              <p className="overflow-y-auto mt-2">{event.description}</p>
              <br></br>
              <div className="flex justify-between items-center my-1">
                <div className="hover:text-transparent hover:bg-gradient-to-r from-cyan-200 to-puzzleBlue hover:bg-clip-text"><strong>WHEN </strong>| {event.date}</div>
                <a className="flex justify-end items-baseline cursor-pointer text-puzzleBlue-dark underline-offset-2 decoration-1 decoration-puzzleBlue-dark hover:underline" href={event.url} target="_blank">
                  <span className="mx-1">Find out more</span>
                  <FontAwesomeIcon className="text-puzzleBlue-dark" icon={faAnglesRight} size="xs"/>
                </a>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Events;
