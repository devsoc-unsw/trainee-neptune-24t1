// import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar () {
  return (
    <>
      <nav className="sticky top-0 bg-puzzleBlue transition duration-500 opacity-90 hover:opacity-100 m-0 min-w-full h-16 flex justify-evenly items-center font-raleway text-white">
        <div>
          <Link to="/">
            <img src="logo.png" alt="logo" className="max-w-10 max-h-10"/>
          </Link>
        </div>
        <div>
          <Link to="/" className="transition duration-700 bg-inherit hover:bg-puzzleBlue-dark p-3">UPCOMING EVENTS</Link>
        </div>
        <div>
          <Link to="/guides" className="transition duration-700 bg-inherit hover:bg-puzzleBlue-dark p-3">PUZZLE GUIDES</Link>
        </div>
        <div>
          <Link to="/archive" className="transition duration-700 bg-inherit hover:bg-puzzleBlue-dark p-3">HUNT ARCHIVE</Link>
        </div>
        <div>
          <Link to="/comp" className="transition duration-700 bg-inherit hover:bg-puzzleBlue-dark p-3">WEEKLY COMP</Link>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
