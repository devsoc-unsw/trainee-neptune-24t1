import React from 'react';

import Footer from '../components/Footer';
import NavigationBar from '../components/Navigation';

function Comp () {
  const date = new Date();
  const [day, setDay] = React.useState('M');

  const switchDay = (event: React.SyntheticEvent, weekday: string) => {
    setDay(weekday);
  };


  return (
    <>
      <NavigationBar/>

      <div className="mt-10">
        <button className={`rounded-l-lg py-2 px-4 transition duration-300 ${day === 'M' ? 'bg-blue-100' : 'bg-gray-100 hover:bg-blue-100'}`} onClick={e => switchDay(e, 'M')}>Monday</button>
        <button className={`border-x py-2 px-4 transition duration-300 ${day === 'W' ? 'bg-amber-100' : 'bg-gray-100 hover:bg-amber-100'}`} onClick={e => switchDay(e, 'W')}>Wednesday</button>
        <button className={`rounded-r-lg py-2 px-4 transition duration-300 ${day === 'F' ? 'bg-pink-100' : 'bg-gray-100 hover:bg-pink-100'}`} onClick={e => switchDay(e, 'F')}>Friday</button>
      </div>
      {day === 'M' && <Monday/>}
      {day === 'W' && <Wednesday/>}
      {day === 'F' && <Friday/>}
      <Footer/>
    </>
  );
}

function Monday () {
  return (
    <></>
  )
}

function Wednesday () {
  return (
    <></>
  )
}

function Friday () {
  return (
    <></>
  )
}

export default Comp;
