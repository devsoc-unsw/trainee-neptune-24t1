// import React from 'react';

import NavigationBar from '../components/Navigation';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeading';

function Landing () {
  return (
    <>
      <NavigationBar/>
      <SectionHeader heading="ABOUT US"/>
      <SectionHeader heading="OUR SPONSORS"/>
      <Footer/>
    </>
  );
}

export default Landing;
