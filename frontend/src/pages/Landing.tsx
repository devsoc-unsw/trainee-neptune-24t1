// import React from 'react';

import NavigationBar from '../components/Navigation';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons/faPuzzlePiece';

function Landing () {
  return (
    <>
      <NavigationBar/>

      <div className="flex flex-col items-center">
        <SectionHeader heading="ABOUT US"/>
        <p className="flex flex-col items-center p-2 font-raleway text-left">
          We are a hobby society for individuals with a passion for problem-solving!
          <ul>
            <li><FontAwesomeIcon icon={faPuzzlePiece} /> Learn rebus, logic, and cryptic puzzles</li>
            <li><FontAwesomeIcon icon={faPuzzlePiece} /> Compete and win in puzzle hunts</li>
            <li><FontAwesomeIcon icon={faPuzzlePiece} /> Join a fun, social, and interactive community</li>
            <li><FontAwesomeIcon icon={faPuzzlePiece} /> Develop creative and problem-solving skills</li>
          </ul>
        </p>
        <SectionHeader heading="MEET THE TEAM"/>
        <SectionHeader heading="OUR SPONSORS"/>
      </div>

      <Footer/>
    </>
  );
}

export default Landing;
