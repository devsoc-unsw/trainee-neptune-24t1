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

  const event = {
    banner: 'https://scontent.fsyd11-2.fna.fbcdn.net/v/t39.30808-6/445687730_122156156618084186_3431698342416514101_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-8Z_JOTN6_IQ7kNvgGHipN9&_nc_ht=scontent.fsyd11-2.fna&oh=00_AYCLRybWd52O6JyZieU4rm1wDvsnPJzjfiwD2Nhs7LtHYw&oe=6654F1B7',
    title: 'PuzzleSoc x DevSoc Presents: A DEV-THEMED GAMES NIGHT',
    description: 'A DEV-THEMED GAMES NIGHT 🎮🧩\nCode your way to victory with our very cool dev-themed puzzles 🧩\nDebug your brain with mind-bending challenges, enjoy byte-sized board games, and indulge in an irresistible spread of snacks and refreshing drinks! 🥞🍵\n💥 Score AMAZING PRIZES including exclusive plushies and other awesome rewards through our raffle and by solving our puzzles 💥\n🎲 Board games will be available to play throughout the event 🎲',
    url: 'https://www.facebook.com/events/1426532081562135/',
    date: '28 May 2024'
  }

  return (
    <>
      <NavigationBar/>
      <SectionHeader heading="UPCOMING EVENTS"/>
      <div className="w-1/4 mx-8 p-4 bg-gray-100 font-raleway">
        <img className="" src={event.banner} alt="banner"/>
        <div className="text-left py-2">
          <h2 className="font-bold my-2">{event.title}</h2>
          <p>{event.description}</p>
          <div className="flex justify-between items-center mt-2">
            <div className="hover:text-puzzleBlue-dark py-1"><strong className="mr-3">DATE</strong>{event.date}</div>
            <a className="flex justify-end items-baseline cursor-pointer underline-offset-4 decoration-1 decoration-puzzleBlue hover:underline" href={event.url} target="_blank">
              <span className="mx-1">Find out more</span>
              <FontAwesomeIcon className="animate-bounce" icon={faAnglesRight} size="xs"/>
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Events;
