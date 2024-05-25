// import React from 'react';

import NavigationBar from '../components/Navigation';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

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
    url: 'https://www.facebook.com/events/1426532081562135/',
    date: '28 May 2024'
  }
  const events = [];
  events.push(event);
  events.push(event);
  events.push(event);

  return (
    <>
      <NavigationBar/>
      <SectionHeader heading="UPCOMING EVENTS"/>
      <div className="flex justify-center mt-8">
        <div className="flex flex-col w-4/5">
        {events.map((event, index) => (
          <div key={index} className="items-center flex flex-row my-2 p-2 bg-gray-100 rounded-lg font-raleway">
            <img className="max-w-96 min-h-56 place-self-center rounded p-1" src={event.banner} alt="banner"/>
            <div className="max-h-56 flex flex-col text-left px-5">
              <h2 className="font-bold text-2xl my-2">{event.title}</h2>
              <p className="overflow-y-auto">{event.description}</p>
              <br></br>
              <div className="flex justify-between items-center mt-2">
                <div className="hover:text-puzzleBlue-dark"><strong className="mr-3">DATE</strong>{event.date}</div>
                <a className="flex justify-end items-baseline cursor-pointer underline-offset-4 decoration-1 decoration-puzzleBlue hover:underline" href={event.url} target="_blank">
                  <span className="mx-1">Find out more</span>
                  <FontAwesomeIcon icon={faAnglesRight} size="xs"/>
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
