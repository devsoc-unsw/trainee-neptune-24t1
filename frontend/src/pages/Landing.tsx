import React from 'react';
import { Link } from "react-router-dom";

import NavigationBar from '../components/Navigation';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons/faPuzzlePiece';

import tl from '../assets/team/tl.png';
import al from '../assets/team/al.png';
import ly from '../assets/team/ly.png';
import jw from '../assets/team/jw.png';
import jianw from '../assets/team/jianw.png';
import tw from '../assets/team/tw.png';
import en from '../assets/team/en.png';
import py from '../assets/team/py.png';
import ck from '../assets/team/ck.png';

function Landing () {
  const scrollTarget = React.useRef<HTMLDivElement>(null);

  const scroll = () => {
    if (scrollTarget.current) {
      scrollTarget.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavigationBar/>
      <div className="flex flex-col justify-center h-screen bg-fixed bg-cover bg-center bg-no-repeat bg-[url('https://scontent.fsyd11-2.fna.fbcdn.net/v/t39.30808-6/314598558_1068595980468786_6460879911079566694_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=unn81l6X1NIQ7kNvgF6pi3c&_nc_ht=scontent.fsyd11-2.fna&oh=00_AYDuq0dBtma8o3UXm2AKaqOVl65-OQrqBY3DM5MCA6LrnA&oe=66591E0D')]">
        <div className="font-bold self-center">
          <p className="bg-gradient-to-r from-cyan-100 to-puzzleBlue-light w-max text-3xl px-3 py-px my-2">WELCOME TO</p>
          <h1 className="text-5xl text-white">UNSW PUZZLE SOCIETY</h1>
        </div>
        <FontAwesomeIcon onClick={scroll} className="w-max relative top-1/3 left-1/2 text-white hover:text-gray-100 cursor-pointer drop-shadow animate-bounce" icon={faCircleChevronDown} size="2xl"/>
      </div>
      <div className="flex flex-col items-center dark:text-slate-100 transition duration-200">
        <div ref={scrollTarget} className="flex flex-col items-center p-2 font-raleway text-left">
          <SectionHeader heading="ABOUT US"/>
          <p className="mt-1">We are a hobby society for individuals with a passion for problem-solving!</p>
          <ul className="ml-16 mt-5">
            <li><FontAwesomeIcon icon={faPuzzlePiece} /> <Link className="text-puzzleBlue underline-offset-2 decoration-1 hover:underline decoration-puzzleBlue" to="/guides">Learn</Link> rebus, logic, and cryptic puzzles</li>
            <li><FontAwesomeIcon icon={faPuzzlePiece} /> Compete and win in <Link className="text-puzzleBlue underline-offset-2 decoration-1 hover:underline decoration-puzzleBlue" to="/comp">online tournaments</Link>  and <Link className="text-puzzleBlue underline-offset-2 decoration-1 hover:underline decoration-puzzleBlue" to="/archive">puzzle hunts</Link></li>
            <li><FontAwesomeIcon icon={faPuzzlePiece} /> Join a fun, social, and interactive community</li>
            <li><FontAwesomeIcon icon={faPuzzlePiece} /> Develop creative and problem-solving skills</li>
          </ul>
        </div>
        <SectionHeader heading="MEET THE TEAM"/>
        <div className="flex flex-row m-4 font-raleway mt-8">
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src={tl} alt="team member profile" />
          <div className="max-h-52 max-w-2xl text-left leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold text-2xl">TIMOTHY LEUNG</strong></h2>
            <span>(PRESIDENT)</span>
            <p>
              Hi, I'm Timothy, a 4th year med student and your president for this year! You may recognise me from [too long ago] as I've been in this society since the first day of uni :ckHmm:.
              <br/>
              My intro to puzzles was the MIT mystery hunt, which I hope to help write this year. I recommend you all look at it (if only to see the scale of the puzzling world 👀)
              <br/> 
              A lot of my time these days is either spent gaming, at bouldering, or playing maimai. I listen to mostly Japanese music, so any jpop recs are welcome :{'>'} :blobMelt:
            </p>
          </div>
        </div>
        <div className="flex flex-row m-4 font-raleway">
          <div className="max-h-52 max-w-2xl text-right leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold text-2xl">LUKE YANG</strong></h2>
          <span>(SECRETARY)</span>
          <p>
            Hey guys, its Luke 😄.
            I am secretary for Puzzlesoc in 2024 yay! 🥳 Currently, I am 3rd Year studying Computer Science/Science at UNSW. 
            My hobbies include cooking 🍳, Football ⚽, chronically watching Youtube, and touching grass (occasionally).  👯‍♂️ 
            Some of my favourite puzzles include Latin Squares, Minesweeper 🏁, Rebus, Loldle and figuring out how to get to Central. 🤣
            My puzzle shows how I love food and where my next travel destination is, so if you solve it pls come with me. 🥺 
          </p>
          </div>
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src={ly} alt="team member profile" />
        </div>
        <div className="flex flex-row m-4 font-raleway">
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src={al} alt="team member profile" />
          <div className="max-h-52 max-w-2xl text-left leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold text-2xl">ALISON LIN</strong></h2>
          <span>(ARC DEL/TREASURER)</span>
          <p>
            Hellooo I'm Alison and I'm a 2nd year studying physio! I'm the arc delegate & treasurer for this year. 🙂 🙂 
            I'm not very good at puzzles but if you start a puzzle race, it is nearly guaranteed that I will join the puzzle then proceed to leave it incomplete after realising I don't know where to begin. 🤡 My favourite puzzles are the few logic ones I can solve (ie. skyscrapers and LITS). :W_puzzle:
            Apart from unsuccessfully attempting puzzles, I also like going to the beach, hanging out with friends, listening to the same songs on repeat, and playing the piano. I also love to spam emojis when I message so be prepared. :huh: 
          </p>
          </div>
        </div>
        <div className="flex flex-row m-4 font-raleway">
          <div className="max-h-52 max-w-2xl text-right leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold text-2xl">JORDAN WUNSCH</strong></h2>
          <span>(PUZZLE EVENTS)</span>
          <p>
            Hey everyone! I’m Jordan and I’m in my third year studying economics and commerce, and I’m also one of the Puzzle Events Directors for this year!
            When I’m not working I’m usually reading (fantasy and sci fi are the best), gaming or struggling to play guitar.
            Over the past year I’ve gotten to like all kinds of puzzles but my favourites when I started were rebuses both because they were the only ones I could even remotely solve and because they are very satisfying when they click.
          </p>
          </div>
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src={jw} alt="team member profile" />
        </div>
        <div className="flex flex-row m-4 font-raleway">
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src={jianw} alt="team member profile" />
          <div className="max-h-52 max-w-2xl text-left leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold text-2xl">JIAN WANG</strong></h2>
          <span>(PUZZLE EVENTS)</span>
          <p>
            Hey guys! I'm Jian and I'm a second year actuarial studies/computer student.
            <br/>
            Some of my favourite puzzles include cryptics, rebus and basically any puzzle with a creative mechanism! These are especially satisfying when you solve them 🧐.
            Some of my hobbies include light gaming, hanging out with friends, card games and the occasional ice skating (even when it's cold).
            If you see me on campus, feel free to say hi!
          </p>
          </div>
        </div>
        <div className="flex flex-row m-4 font-raleway">
          <div className="max-h-52 max-w-2xl text-right leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold text-2xl">TIM WAN</strong></h2>
          <span>(SOCIAL EVENTS/GRIEVANCE OFFICER)</span>
          <p>
            Heya! 🙂 My name is Tim and I'm a third year studying computer science! Feel free to say hi to me at any activity, I promise I'll be friendly!
            I love puzzles, as evident in doing those nyt mini dailies everyday (except when I forget, which is often), so I really like word puzzles.
            However, my absolute favourite ones are when a really unique or creative mechanic is used - solving those feel super satisfying {'>_<'}.
            Outside of puzzles, I really like hanging with friends, listening to music (drop recs!), playing piano/trumpet/guitar, going to the arcade, playing board games and taking walks.
          </p>
          </div>
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src={tw} alt="team member profile" />
        </div>
        <div className="flex flex-row m-4 font-raleway">
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src={en} alt="team member profile" />
          <div className="max-h-52 max-w-2xl text-left leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold text-2xl">EMILY NING</strong></h2>
          <span>(DESIGN)</span>
          <p>
            Hallo everyone!! I'm Em, a 2nd year computer science student, and the Design Director for this year! ~☆
            
            My fav puzzles are rebuses and logic puzzles! (anything without huge blocks of text (Ｔ▽Ｔ) ironic i know).  In my free time I like to draw/make scrapbooks, watch cartoons (feel free to discuss shows with me), hang out with friends, rollerblade, and play musical instruments (i own a lot). I listen to a variety of music genres but my fav is pop punk.
          </p>
          </div>
        </div>
        <div className="flex flex-row m-4 font-raleway">
          <div className="max-h-52 max-w-2xl text-right leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold text-2xl">PETER YANG</strong></h2>
          <span>(MARKETING)</span>
          <p>
            Hey guys, I’m Peter! I study CS / MATH (recently transferred from ACTL 🤡) and I’m the Marketing Director this year!!
            I like to visualise my puzzles 🤔 and therefore I enjoy puzzles like rebus and Quintessential.
            My favourite (non-alcoholic) drink is kombucha 🤤 but I also get bubble tea every second day 🙈 (basically whenever I leave the house). I also love reading Webnovels 💀 in my spare time.
            Follow us on socials 😃😃
          </p>
          </div>
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src={py} alt="team member profile" />
        </div>
        <div className="flex flex-row m-4 font-raleway">
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src={ck} alt="team member profile" />
          <div className="max-h-52 max-w-2xl text-left leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold text-2xl">CK</strong></h2>
          <span>(MASCOT)</span>
          <p>
            I'm CK, PuzzleSoc's mascot, and I turn three this year! Last year, I had so much fun writing my own puzzle that I had to write another one!
            <br/>
            Full Name: CK the cat (i.e. curiosity killed the cat)
            Nicknames: Cookie, Calvin Klein™️
            Pronouns: they/them
            Likes: puzzles, detective stories, escape rooms, napping, fashionable hats, nature documentaries
            Dislikes: spoilers in the chat/comments, cheese holes
          </p>
          </div>
        </div>
        <SectionHeader heading="OUR SPONSORS"/>
        <div className="flex flex-row min-w-full justify-center items-center dark:bg-white dark:opacity-95 py-5 transition duration-200 mt-3">
          <a href="https://www.arc.unsw.edu.au/">
            <img className="max-h-16 mx-7 transition duration:100 hover:scale-105" src="https://www.arc.unsw.edu.au/uploads/Arc%20Clubs%20Logo%202019-solid%20green.png" alt="arc logo" />
          </a>
          <a href="https://www.janestreet.com/">
            <img className="max-h-16 mx-7 transition duration:100 hover:scale-105" src="https://www.janestreet.com/assets/logo_horizontal-177b793d3559af186aa24ab7a93bea2c04d723f02e2ea905263735abe031f15b.png" alt="jane street logo"/>
          </a>
          <a href="https://puzzlecard.org/">
            <img className="max-h-16 mx-7 transition duration:100 hover:scale-105" src="https://images.squarespace-cdn.com/content/v1/5ec7d2acf3a8a555edc8271d/1612056539533-06N29JTGMKVZICCCL798/Mystery-Unfolds-Puzzle-Cards.png?format=1500w" alt="mystery unfolds logo" />
          </a>
          <a href="https://www.socialescape.com.au/">
            <img className="max-h-16 bg-gray-800 rounded-sm p-3 mx-7 transition duration:100 hover:scale-105" src="https://www.socialescape.com.au/uploads/2/6/9/6/26968594/published/social-escape-logo-transparent-mini.gif?1686812403" alt="social escape logo" />
          </a>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Landing;
