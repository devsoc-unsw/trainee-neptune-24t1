import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';

interface DropdownKeys {
  years: number[];
  toggleDropdown: () => void;
  selectedYear: string;
  setYear: (year: string) => void;
  setDropdown: (drop: boolean) => void;
  showDropdown: boolean;
  dropdownRef: React.RefObject<HTMLDivElement>;
}

const YearDropdown: React.FC<DropdownKeys> = ({ years, toggleDropdown, selectedYear, setYear, setDropdown, showDropdown, dropdownRef}) => {
  const switchYear = (year: number) => {
    let yearString = year.toString();
    setYear(yearString);
    setDropdown(false);
  };

  return (
    <>
    <button className={`flex flex-row text-2xl max-w-max font-raleway mt-20 pb-1 rounded pl-3 py-px transition duration-300 hover:bg-puzzleBlue hover:text-white`} onClick={toggleDropdown}>
      {selectedYear}
      <div className="px-2 pt-1">
      <FontAwesomeIcon icon={faCaretSquareDown} size="xs"/>
      </div>
    </button>
    {showDropdown && (
      <div ref={dropdownRef} className="absolute bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
        {years.map((year) => (
          <button key={year} onClick={() => switchYear(year)} className="block px-7 py-2 text-gray-700 font-medium transition duration-300 hover:bg-puzzleBlue hover:text-white">{year}</button>
      ))}
      </div>
    )}
  </>
  );
}

export default YearDropdown;