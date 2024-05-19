// import React from 'react';

import NavigationBar from '../components/Navigation';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeading';

function Landing () {
  return (
    <>
      <NavigationBar/>
      <div id="events">
        <SectionHeader heading="UPCOMING EVENTS"/>
      </div>
      <SectionHeader heading="ABOUT US"/>
      <p className="p-2 font-raleway min-h-screen">
        We are a hobby society for individuals with a passion for problem-solving!
        <li>Learn rebus, logic, and cryptic puzzles</li>
        <li>Compete and win in puzzle hunts</li>
        <li>Join a fun, social, and interactive community</li>
        <li>Develop creative and problem-solving skills</li>
      </p>
      <SectionHeader heading="OUR SPONSORS"/>
      <Footer/>
    </>
  );
}

export default Landing;
