import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareDown } from '@fortawesome/free-solid-svg-icons';

interface DropdownProps {
  years: number[];
  toggleDropdown: () => void;
  year: string;
  setYear: (year: string) => void;
  setDropdown: (drop: boolean) => void;
  dropdown: boolean;
  dropdownRef: React.RefObject<HTMLDivElement>;
}

const YearDropdown: React.FC<DropdownProps> = ({ years, toggleDropdown, year, setYear, setDropdown, dropdown, dropdownRef}) => {
  const switchYear = (year: number) => {
    let yearString = year.toString();
    setYear(yearString);
    setDropdown(false);
  };

  return (
    <div className="flex-col mt-2">
      <button className="flex text-2xl font-bold items-center font-sans rounded px-3 py-1 transition duration-300 hover:bg-gray-100" onClick={toggleDropdown}>
        <span>{year}</span>
        <FontAwesomeIcon className="pl-2" icon={faCaretSquareDown} size="xs"/>
      </button>
      {dropdown && (
        <div ref={dropdownRef} className="flex flex-col border border-gray-300 rounded shadow overflow-y-auto">
          {years.map((year) => (
            <button key={year} onClick={() => switchYear(year)} className="flex items-center justify-center w-full px-4 py-2 text-xl font-raleway transition duration-300 hover:bg-puzzleBlue hover:text-white">{year}</button>
        ))}
        </div>
      )}
    </div>
  );
}

export default YearDropdown;