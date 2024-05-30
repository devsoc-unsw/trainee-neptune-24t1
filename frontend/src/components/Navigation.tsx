import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function NavigationBar () {
  const [darkMode, setMode] = React.useState(false);
  
  React.useEffect(() => {
    const modePref = localStorage.getItem('darkMode') === 'true';
    setMode(modePref);
    document.documentElement.classList.add('transition', 'duration-200' , 'ease-in-out');
    document.documentElement.classList.toggle('dark', modePref);
    document.documentElement.classList.toggle('bg-gray-900', modePref);
  }, [])

  const toggleDark = () => {
    const newMode = !darkMode;
    setMode(!darkMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.documentElement.classList.toggle('dark', newMode);
    document.documentElement.classList.toggle('bg-gray-900', newMode);
  }

  return (
    <>
      <nav className="z-20 sticky top-0 bg-puzzleBlue transition duration-200 opacity-90 hover:opacity-100 m-0 min-w-full h-14 px-2 flex justify-evenly items-center font-raleway text-white">
        <div>
          <Link to="/">
            <img src="logo.png" alt="logo" className="w-10 h-10 sm:w-12 sm:h-12 transition duration-200 contrast-125 brightness-100 hover:brightness-95"/>
          </Link>
        </div>
        <div>
          <Link to="/events" className="transition duration-300 bg-inherit hover:bg-puzzleBlue-dark p-3"><span className="hidden sm:inline-block">UPCOMING&nbsp;</span>EVENTS</Link>
        </div>
        <div>
          <Link to="/guides" className="transition duration-300 bg-inherit hover:bg-puzzleBlue-dark p-3"><span className="hidden sm:inline-block">PUZZLE&nbsp;</span>GUIDES</Link>
        </div>
        <div>
          <Link to="/archive" className="transition duration-300 bg-inherit hover:bg-puzzleBlue-dark p-3"><span className="hidden sm:inline-block">HUNT&nbsp;</span>ARCHIVE</Link>
        </div>
        <div>
          <Link to="/comp" className="transition duration-300 bg-inherit hover:bg-puzzleBlue-dark p-3"><span className="hidden sm:inline-block">WEEKLY&nbsp;</span>COMP</Link>
        </div>
        <FontAwesomeIcon onClick={toggleDark} className="transition duration-700 bg-inherit hover:bg-puzzleBlue-dark p-3 hover:cursor-pointer" icon={faMoon} size="lg"/>
      </nav>
    </>
  );
}

export default NavigationBar;
