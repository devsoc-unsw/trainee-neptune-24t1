import React from 'react';

import Footer from '../components/Footer';
import NavigationBar from '../components/Navigation';
import SectionHeader from '../components/SectionHeading';
import YearDropdown from '../components/YearDropdown';

function Archive () {
  // Include all years since 2022 automatically
  const startYear = 2022;
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);

  const [year, setYear] = React.useState(String(currentYear));
  const [dropdown, setDropdown] = React.useState(false);

  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) ) {
      setDropdown(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    }
  });

  return (
    <>
      <NavigationBar/>
      <SectionHeader heading="ARCHIVE"/>
      <div className="flex justify-center">
        <YearDropdown years={years} toggleDropdown={toggleDropdown} year={year} setYear={setYear} setDropdown={setDropdown} dropdown={dropdown} dropdownRef={dropdownRef}/>
      </div>
      <Footer/>
    </>
  );
}

export default Archive;
