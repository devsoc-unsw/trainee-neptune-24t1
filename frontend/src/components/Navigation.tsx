// import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar () {
  return (
    <>
      <nav className="bg-cyan-500 m-0 min-w-full h-12 flex justify-evenly items-center font-raleway text-white">
        <div>
          <Link to="/">
            <img src="logo.png" alt="logo" className="max-w-8 max-h-8"/>
          </Link>
        </div>
        <div>
          <Link to="/guides">PUZZLE GUIDES</Link>
        </div>
        <div>
          <Link to="/archive">HUNT ARCHIVE</Link>
        </div>
        <div>
          <Link to="/comp">WEEKLY COMP</Link>
        </div>
      </nav>
    </>
  );
}

export default NavigationBar;
