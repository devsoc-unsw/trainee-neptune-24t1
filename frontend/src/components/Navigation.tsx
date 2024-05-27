// import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function NavigationBar () {
  const toggleDark = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('bg-gray-900');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('bg-gray-900');
      if (!document.documentElement.classList.contains('transition')) {
        document.documentElement.classList.add('transition', 'duration-200' , 'ease-in-out');
      }
    }
  }

  return (
    <>
      <nav className="z-20 sticky top-0 bg-puzzleBlue transition duration-200 opacity-90 hover:opacity-100 m-0 min-w-full h-14 flex justify-evenly items-center font-raleway text-white">
        <div>
          <Link to="/">
            <img src="logo.png" alt="logo" className="max-w-12 max-h-12 transition duration-200 contrast-125 brightness-100 hover:brightness-95"/>
          </Link>
        </div>
        <div>
          <Link to="/events" className="transition duration-300 bg-inherit hover:bg-puzzleBlue-dark p-3">UPCOMING EVENTS</Link>
        </div>
        <div>
          <Link to="/guides" className="transition duration-300 bg-inherit hover:bg-puzzleBlue-dark p-3">PUZZLE GUIDES</Link>
        </div>
        <div>
          <Link to="/archive" className="transition duration-300 bg-inherit hover:bg-puzzleBlue-dark p-3">HUNT ARCHIVE</Link>
        </div>
        <div>
          <Link to="/comp" className="transition duration-300 bg-inherit hover:bg-puzzleBlue-dark p-3">WEEKLY COMP</Link>
        </div>
        <FontAwesomeIcon onClick={toggleDark} className="transition duration-700 bg-inherit hover:bg-puzzleBlue-dark p-3 hover:cursor-pointer" icon={faMoon} size="lg"/>
      </nav>
    </>
  );
}

export default NavigationBar;
