import React from 'react';

import Footer from '../components/Footer';
import NavigationBar from '../components/Navigation';
import SectionHeader from '../components/SectionHeading';
import YearDropdown from '../components/YearDropdown';
import HuntFormat from '../components/HuntFormat'
import OWeekFormat from '../components/OWeekFormat'

// 2021 Puzzle Hunts
import MagicShow from '../assets/2021/MagicShow.png'
import EscapeMatrix from '../assets/2021/EscapeMatrix.png'
import Pokehunt from '../assets/2021/Pokehunt.png'
import RiftII from '../assets/2021/RiftII.jpg'
import AppStore from '../assets/2021/AppStore.jpg'
import PixarLamp from '../assets/2021/PixarLamp.jpg'
import GalleryHeist from '../assets/2021/GalleryHeist.jpg'
import TrickTreat from '../assets/2021/TrickTreat.jpg'
import LifeCK from '../assets/2021/LifeCK.jpg'

// 2022 Puzzle Hunts
import WildWoods from '../assets/2022/WildWoods.jpg'
import CosmosII from '../assets/2022/CosmosII.jpg'
import OmensOccult from '../assets/2022/OmensOccult.jpg'
import PurrfectParade from '../assets/2022/PurrfectParade.jpg'
import RiftIII from '../assets/2022/RiftIII.jpg'
import GhibliHunt from '../assets/2022/GhibliHunt.jpg'
import TumblingTime from '../assets/2022/TumblingTime.jpg'
import UntitledHunt from '../assets/2022/UntitledHunt.jpg'

// 2023 Puzzle Hunts
import AroundWorld from '../assets/2023/AroundWorld.png'
import CulinaryConundrums from '../assets/2023/CulinaryConundrums.png'
import CasinoHunt from '../assets/2023/CasinoHunt.png'
import RiftIV from '../assets/2023/RiftIV.png'
import ShojoWorld from '../assets/2023/ShojoWorld.png'
import BeatsTreats from '../assets/2023/BeatsTreats.png'
import YoutubeHunt from '../assets/2023/YoutubeHunt.jpg'

// 2024 Puzzle Hunts
import CosmicConundrums from '../assets/2024/CosmicConundrums.png'
import BlastPast from '../assets/2024/BlastPast.png'
import LostArcade from '../assets/2024/LostArcade.png'

function Archive () {
  const startYear = 2019;
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);

  const [year, setYear] = React.useState(String(currentYear));
  const [dropdown, setDropdown] = React.useState(false);

  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  }

  const handleClick = (event: MouseEvent) => {
    if (dropdownRef.current) {
      if (dropdownRef.current.contains(event.target as Node) && dropdown) {
        setDropdown(true);
      } else {
        setDropdown(false);
      }
    }
  }

  React.useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    }
  });

  return (
    <>
      <NavigationBar/>
      <SectionHeader heading="ARCHIVE"/>
      <div className="flex justify-center">
        <YearDropdown years={years} toggleDropdown={toggleDropdown} year={year} setYear={setYear} setDropdown={setDropdown} dropdown={dropdown} dropdownRef={dropdownRef}/>
      </div>
      {year === '2019' && <Display2019/>}
      {year === '2020' && <Display2020/>}
      {year === '2021' && <Display2021/>}
      {year === '2022' && <Display2022/>}
      {year === '2023' && <Display2023/>}
      {year === '2024' && <Display2024/>}
      <div className="mb-10"></div>
      <Footer/>
    </>
  );
}

function Display2019 () {
  return (
    <div className="flex justify-center flex-wrap">

  </div>
  );
}

function Display2020 () {
  return (
    <div className="flex justify-center flex-wrap">

  </div>
  );
}

function Display2021 () {
  return (
    <div className="flex justify-center flex-wrap">
      <OWeekFormat img={MagicShow} title="The Magic Show" form="http://bit.ly/escapemagic" solution=""/>
      <HuntFormat img={EscapeMatrix} title="PuzzleSoc x MathSoc" pdf="http://bit.ly/3caNPvd" answer="" solution="https://bit.ly/3cNuxgY"/>
      <HuntFormat img={Pokehunt} title="Pokehunt" pdf="https://bit.ly/3gHn8T8" answer="" solution="https://bit.ly/3gHn8T8"/>
      <HuntFormat img={RiftII} title="PuzzleSoc x RiotSoc" pdf="https://bit.ly/3wEeyt5" answer="" solution="https://bit.ly/344CGJ1"/>
      <HuntFormat img={AppStore} title="Puzzles in the App Store" pdf="https://bit.ly/2TyznIk" answer="" solution="https://bit.ly/3dHwLyH"/>
      <HuntFormat img={PixarLamp} title="Puzzles Under the Pixar Lamp" pdf="https://bit.ly/3lJ3XuA" answer="https://bit.ly/putplanswerchecking" solution="https://bit.ly/3s0Ouac"/>
      <OWeekFormat img={GalleryHeist} title="PuzzleSoc x A&DSoc" form="https://forms.gle/eavkYZVCrwWVyoPv8" solution="https://bit.ly/3A91pdE"/>
      <HuntFormat img={TrickTreat} title="PuzzleSoc x EcoSoc" pdf="https://bit.ly/3FSvMbm" answer="https://forms.gle/niX21kfTCfMaCY338" solution="https://bit.ly/2Z5UNiC"/>
      <HuntFormat img={LifeCK} title="The Daily Life of CK the Cat" pdf="https://bit.ly/3Gehhhu" answer="" solution="https://bit.ly/2ZggzR6"/>
  </div>
  );
}

function Display2022 () {
  return (
    <div className="flex justify-center flex-wrap">
      <OWeekFormat img={WildWoods} title="The Wild Woods" form="https://bit.ly/thewildwoods" solution="https://bit.ly/3sHM1nj"/>
      <HuntFormat img={CosmosII} title="Puzzles in the Cosmos II" pdf="https://bit.ly/3MMZ0vD" answer="https://forms.gle/pxPqZ9xrL8KyxqRP7" solution="https://bit.ly/3tWtClQ"/>
      <HuntFormat img={OmensOccult} title="Omens and the Occult" pdf="https://bit.ly/3Gse4w5" answer="https://bit.ly/occultanswercheck" solution="https://bit.ly/3wPRSaO"/>
      <OWeekFormat img={PurrfectParade} title="PuzzleSoc x GenSoc" form="https://forms.gle/kdQXXNkwLrgt5nTy8" solution="https://bit.ly/3c0jH9E"/>
      <HuntFormat img={RiftIII} title="PuzzleSoc x RiotSoc" pdf="https://bit.ly/3OKjGEj" answer="https://bit.ly/potr3checker" solution="https://bit.ly/3zH9VCL"/>
      <HuntFormat img={GhibliHunt} title="PuzzleSoc x A&DSoc" pdf="https://bit.ly/3DArneF" answer="https://bit.ly/ghiblicheck" solution="https://bit.ly/3DDnwNA"/>
      <HuntFormat img={TumblingTime} title="Tumbling Through Time" pdf="https://bit.ly/3FieDsd" answer="https://bit.ly/ttt-check" solution="http://bit.ly/3UMMXC4"/>
      <HuntFormat img={UntitledHunt} title="Untitled Puzzle Hunt" pdf="https://bit.ly/3Pzsq2p" answer="https://forms.gle/ia7XCa6iSSZQMBzU9" solution="https://bit.ly/3V7o9V4"/>
    </div>
  );
}

function Display2023 () {
  return (
    <div className="flex justify-center flex-wrap">
      <OWeekFormat img={AroundWorld} title="Around the World in 7 Days" form="https://forms.gle/XzZMfYDeFpVGQ2ok6" solution="https://bit.ly/3KAqPrW"/>
      <HuntFormat img={CulinaryConundrums} title="Culinary Conundrums" pdf="https://bit.ly/3ZCltB3" answer="https://forms.gle/QDzTcSTtykbnvAhu9" solution="https://bit.ly/40IYBks"/>
      <HuntFormat img={CasinoHunt} title="The Casino" pdf="https://bit.ly/42tgGU1" answer="https://bit.ly/blastpast-check" solution="https://bit.ly/3N527l3"/>
      <HuntFormat img={RiftIV} title="PuzzleSoc x RiotSoc" pdf="https://bit.ly/3Pm1TqH" answer="https://forms.gle/r8eyW7HqxtZ8RLR36" solution="https://bit.ly/3Kal1VL"/>
      <HuntFormat img={ShojoWorld} title="PuzzleSoc x AUNSW" pdf="https://bit.ly/45ycS6d" answer="https://forms.gle/yYHPweJW9Z3ATkDC8" solution="https://bit.ly/3L5KS1o"/>
      <HuntFormat img={BeatsTreats} title="PuzzleSoc x LofiSoc" pdf="https://bit.ly/3sJzgva" answer="" solution="https://bit.ly/46lrTry"/>
      <HuntFormat img={YoutubeHunt} title="Youtube Hunt" pdf="https://bit.ly/47q04zJ" answer="https://bit.ly/youwontbelieve-check" solution="https://bit.ly/40MMLGZ"/>
  </div>
  );
}

function Display2024 () {
  return (
    <div className="flex justify-center flex-wrap">
      <OWeekFormat img={CosmicConundrums} title="Cosmic Conundrums" form="https://forms.gle/imFc3aWRYdhHFYi89" solution="https://bit.ly/439tjFx"/>
      <HuntFormat img={LostArcade} title="Lost in the Arcade" pdf="https://bit.ly/4a7uO9H" answer="https://bit.ly/lostarcade-check" solution="https://bit.ly/3IpmLZX"/>
      <HuntFormat img={BlastPast} title="Blast From the Past" pdf="" answer="https://bit.ly/blastpast-check" solution=""/>
    </div>
  );
}

export default Archive;