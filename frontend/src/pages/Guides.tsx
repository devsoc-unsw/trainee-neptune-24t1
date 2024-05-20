import React from 'react';

import Footer from '../components/Footer';
import NavigationBar from '../components/Navigation';
import SectionHeader from '../components/SectionHeading';

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

function Rebus () {
  return (
    <SectionHeader heading="REBUS"/>
  );
}

function Logic () {
  return (
    <SectionHeader heading="LOGIC"/>
  );
}

function Cryptic () {
  return (
    <SectionHeader heading="CRYPTIC"/>
  );
}

function Minipuzz () {
  return (
    <SectionHeader heading="MINIPUZZ"/>
  );
}


export default Guides;
