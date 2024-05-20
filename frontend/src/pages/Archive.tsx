import React, { useRef, useEffect } from 'react';

import Footer from '../components/Footer';
import NavigationBar from '../components/Navigation';
import SectionHeader from '../components/SectionHeading';
import YearDropdown from '../components/Dropdowns';

function Archive () {
  const [selectedYear, setYear] = React.useState('2024');
  const [showDropdown, setDropdown] = React.useState(false);
  const years = [2022, 2023, 2024];
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdown(!showDropdown);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && dropdownRef.current.contains(event.target as Node) ) {
      setDropdown(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () =>{
      document.removeEventListener('mousedown', handleClickOutside);
    }
  });

  return (
    <>
      <NavigationBar/>
      <SectionHeader heading="ARCHIVE"/>
      <div className="flex relative">
        <h1 className="text-2xl max-w-max font-raleway mt-20 rounded pl-8 pr-3">Year: </h1>
        <div className="flex-col">
          <YearDropdown years={years} toggleDropdown={toggleDropdown} selectedYear={selectedYear} setYear={setYear} setDropdown={setDropdown} showDropdown={showDropdown} dropdownRef={dropdownRef}/>
        </div>
      </div>
      <Footer/>
    </>
  );
}


export default Archive;
