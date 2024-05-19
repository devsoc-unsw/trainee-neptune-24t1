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
      <div className="m-10">
        <button className="rounded-l-lg py-2 px-4 transition duration-300 bg-slate-100 hover:bg-blue-100" onClick={e => switchGuide(e, 'rebus')}>REBUS</button>
        <button className="border-x py-2 px-4 transition duration-300 bg-slate-100 hover:bg-blue-100" onClick={e => switchGuide(e, 'logic')}>LOGIC</button>
        <button className="border-r py-2 px-4 transition duration-300 bg-slate-100 hover:bg-amber-100" onClick={e => switchGuide(e, 'cryptic')}>CRYPTIC</button>
        <button className="rounded-r-lg py-2 px-4 transition duration-300 bg-slate-100 hover:bg-pink-100" onClick={e => switchGuide(e, 'minipuzz')}>MINIPUZZ</button>
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
    <SectionHeader heading="Rebus"/>
  );
}

function Logic () {
  return (
    <SectionHeader heading="Logic"/>
  );
}

function Cryptic () {
  return (
    <SectionHeader heading="Cryptic"/>
  );
}

function Minipuzz () {
  return (
    <SectionHeader heading="Minipuzz"/>
  );
}


export default Guides;
