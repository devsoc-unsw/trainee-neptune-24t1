import React from 'react';

import Footer from '../components/Footer';
import NavigationBar from '../components/Navigation';
import SectionHeader from '../components/SectionHeading';
import YearDropdown from '../components/YearDropdown';
import HuntFormat from '../components/HuntFormat'

// 2019 Puzzle Hunts
import Cosmos from '../assets/2019/Cosmos.jpg'

// 2020 Puzzle Hunts
import StockMarket from '../assets/2020/StockMarket.jpg'
import Potterverse from '../assets/2020/Potterverse.png'
import CuriousVillage from '../assets/2020/CuriousVillage.jpg'
import SpiritWorld from '../assets/2020/SpiritWorld.png'
import AroundWorld from '../assets/2020/AroundWorld.jpg'
import Rift from '../assets/2020/Rift.jpg'
import Matsuri from '../assets/2020/Matsuri.jpg'

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
import WorldDays from '../assets/2023/WorldDays.png'
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

interface HuntDetails {
  img: string;
  title: string;
  pdf?: string;
  interactive?: string;
  form?: string;
  answer?: string;
  solution?: string;
}

const hunts = {
  2019: [{ img: Cosmos, title:"Puzzles in the Cosmos", pdf: "https://bit.ly/3kQJYaG" }],
  2020: [
    { img: StockMarket, title: "Puzzles in the Stock Market", pdf: "https://bit.ly/2OshA2z", solution: "https://bit.ly/3qpypZp"},
    { img: Potterverse, title: "Puzzles in the Potterverse", interactive: "http://bit.ly/3ccPuR0", pdf:"https://bit.ly/3oK1rCQ" },
    { img: CuriousVillage, title: "Puzzles in the Curious Village", interactive:"http://bit.ly/3egMaHq", pdf: "https://bit.ly/3edK5vF" },
    { img: SpiritWorld, title: "The Spirit World", form: "https://forms.gle/nkb5LSLy2DeCExrr8", interactive: "http://bit.ly/3kVWYfd" },
    { img: AroundWorld, title: "PuzzleSoc x PsychSoc", interactive: "http://bit.ly/30gDWqy", pdf: "https://bit.ly/3bl2vJg" },
    { img: Rift, title: "PuzzleSoc x RiotSoc", interactive:"http://bit.ly/38z108D", pdf: "https://bit.ly/38jUToe" },
    { img: Matsuri, title: "Puzzles at Matsuri", interactive:"http://bit.ly/3rkzliS", pdf: "https://bit.ly/3bAD9Ym" }
  ],
  2021: [
    { img: MagicShow, title: "The Magic Show", form: "https://bit.ly/escapemagic" },
    { img: EscapeMatrix, title: "PuzzleSoc x MathSoc", pdf: "https://bit.ly/3caNPvd", solution: "https://bit.ly/3cNuxgY" },
    { img: Pokehunt, title: "Pokehunt", interactive:"https://bit.ly/2QyyKNs", pdf: "https://bit.ly/3gHn8T8", solution: "https://bit.ly/3gHn8T8" },
    { img: RiftII, title: "PuzzleSoc x RiotSoc", pdf: "https://bit.ly/3wEeyt5", solution: "https://bit.ly/344CGJ1" },
    { img: AppStore, title: "Puzzles in the App Store", interactive:"https://bit.ly/3wjg82N", pdf: "https://bit.ly/2TyznIk", solution: "https://bit.ly/3dHwLyH" },
    { img: PixarLamp, title: "Puzzles Under the Pixar Lamp", pdf: "https://bit.ly/3lJ3XuA", answer: "https://bit.ly/putplanswerchecking", solution: "https://bit.ly/3s0Ouac" },
    { img: GalleryHeist, title: "PuzzleSoc x A&DSoc", form: "https://forms.gle/eavkYZVCrwWVyoPv8", solution: "https://bit.ly/3A91pdE" },
    { img: TrickTreat, title: "PuzzleSoc x EcoSoc", pdf: "https://bit.ly/3FSvMbm", answer: "https://forms.gle/niX21kfTCfMaCY338", solution: "https://bit.ly/2Z5UNiC" },
    { img: LifeCK, title: "The Daily Life of CK the Cat", pdf: "https://bit.ly/3Gehhhu", solution: "https://bit.ly/2ZggzR6" },
  ],
  2022: [
    { img: WildWoods, title: "The Wild Woods", form: "https://bit.ly/thewildwoods", solution: "https://bit.ly/3sHM1nj" },
    { img: CosmosII, title: "Puzzles in the Cosmos II", pdf: "https://bit.ly/3MMZ0vD", answer: "https://forms.gle/pxPqZ9xrL8KyxqRP7", solution: "https://bit.ly/3tWtClQ" },
    { img: OmensOccult, title: "Omens and the Occult", pdf: "https://bit.ly/3Gse4w5", answer: "https://bit.ly/occultanswercheck", solution: "https://bit.ly/3wPRSaO" },
    { img: PurrfectParade, title: "PuzzleSoc x GenSoc", form: "https://forms.gle/kdQXXNkwLrgt5nTy8", solution: "https://bit.ly/3c0jH9E" },
    { img: RiftIII, title: "PuzzleSoc x RiotSoc", pdf: "https://bit.ly/3OKjGEj", answer: "https://bit.ly/potr3checker", solution: "https://bit.ly/3zH9VCL" },
    { img: GhibliHunt, title: "PuzzleSoc x A&DSoc", pdf: "https://bit.ly/3DArneF", answer: "https://bit.ly/ghiblicheck", solution: "https://bit.ly/3DDnwNA" },
    { img: TumblingTime, title: "Tumbling Through Time", pdf: "https://bit.ly/3FieDsd", answer: "https://bit.ly/ttt-check", solution: "https://bit.ly/3UMMXC4" },
    { img: UntitledHunt, title: "Untitled Puzzle Hunt", pdf: "https://bit.ly/3Pzsq2p", answer: "https://forms.gle/ia7XCa6iSSZQMBzU9", solution: "https://bit.ly/3V7o9V4" },
  ],
  2023: [
    { img: WorldDays, title: "Around the World in 7 Days", form: "https://forms.gle/XzZMfYDeFpVGQ2ok6", solution: "https://bit.ly/3KAqPrW" },
    { img: CulinaryConundrums, title: "Culinary Conundrums", pdf: "https://bit.ly/3ZCltB3", answer: "https://forms.gle/QDzTcSTtykbnvAhu9", solution: "https://bit.ly/40IYBks" },
    { img: CasinoHunt, title: "The Casino", pdf: "https://bit.ly/42tgGU1", answer: "https://bit.ly/blastpast-check", solution: "https://bit.ly/3N527l3" },
    { img: RiftIV, title: "PuzzleSoc x RiotSoc", pdf: "https://bit.ly/3Pm1TqH", answer: "https://forms.gle/r8eyW7HqxtZ8RLR36", solution: "https://bit.ly/3Kal1VL" },
    { img: ShojoWorld, title: "PuzzleSoc x AUNSW", pdf: "https://bit.ly/45ycS6d", answer: "https://forms.gle/yYHPweJW9Z3ATkDC8", solution: "https://bit.ly/3L5KS1o" },
    { img: BeatsTreats, title: "PuzzleSoc x LofiSoc", pdf: "https://bit.ly/3sJzgva", solution: "https://bit.ly/46lrTry" },
    { img: YoutubeHunt, title: "Youtube Hunt", pdf: "https://bit.ly/47q04zJ", answer: "https://bit.ly/youwontbelieve-check", solution: "https://bit.ly/40MMLGZ" },
  ],
  2024: [
    { img: CosmicConundrums, title: "Cosmic Conundrums", form: "https://forms.gle/imFc3aWRYdhHFYi89", solution: "https://bit.ly/439tjFx" },
    { img: LostArcade, title: "Lost in the Arcade", pdf:"https://bit.ly/4a7uO9H", answer: "https://bit.ly/lostarcade-check", solution: "https://bit.ly/3IpmLZX" },
    { img: BlastPast, title: "Blast From the Past", answer: "https://bit.ly/blastpast-check" }
  ]
}

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
      {year === '2019' && <DisplayHunts hunts={hunts[2019]}/>}
      {year === '2020' && <DisplayHunts hunts={hunts[2020]}/>}
      {year === '2021' && <DisplayHunts hunts={hunts[2021]}/>}
      {year === '2022' && <DisplayHunts hunts={hunts[2022]}/>}
      {year === '2023' && <DisplayHunts hunts={hunts[2023]}/>}
      {year === '2024' && <DisplayHunts hunts={hunts[2024]}/>}
      <div className="mb-10"></div>
      <Footer/>
    </>
  );
}

function DisplayHunts({ hunts }: { hunts: HuntDetails[] }) {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {hunts.map((item: any, index: any) => (
          <div key={index} className="max-w-96 my-5 mx-5 bg-slate-100 dark:bg-slate-700 py-3 px-3 font-raleway rounded-md transition duration-200">
            <HuntFormat title={item.title} img={item.img} form={item.form} pdf={item.pdf} interactive={item.interactive} answer={item.answer} solution={item.solution}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Archive;