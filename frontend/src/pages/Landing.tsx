// import React from 'react';
import { Link } from "react-router-dom";

import NavigationBar from '../components/Navigation';
import Footer from '../components/Footer';
import SectionHeader from '../components/SectionHeading';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons/faPuzzlePiece';

function Landing () {
  return (
    <>
      <NavigationBar/>
      <div className="flex flex-col justify-center self-stretch h-screen bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://scontent.fsyd11-2.fna.fbcdn.net/v/t39.30808-6/314598558_1068595980468786_6460879911079566694_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=unn81l6X1NIQ7kNvgF6pi3c&_nc_ht=scontent.fsyd11-2.fna&oh=00_AYDuq0dBtma8o3UXm2AKaqOVl65-OQrqBY3DM5MCA6LrnA&oe=66591E0D')" }}>
        <div className="font-bold self-center">
          <p className="bg-gradient-to-r from-cyan-100 to-puzzleBlue-light w-max text-3xl px-3 py-px my-2">WELCOME TO</p>
          <img className="hidden hover:inline-block" src="logo.png" alt="logo"/>
          <h1 className="text-5xl text-white">UNSW PUZZLE SOCIETY</h1>
        </div>
      </div>
      <div className="flex flex-col items-center dark:text-slate-100 transition duration-200">
        <div className="flex flex-col items-center p-2 font-raleway text-left">
          <SectionHeader heading="ABOUT US"/>
          We are a hobby society for individuals with a passion for problem-solving!
          <ul>
            <li><FontAwesomeIcon icon={faPuzzlePiece} /> <Link className="text-puzzleBlue underline-offset-2 decoration-1 hover:underline decoration-puzzleBlue" to="/guides">Learn</Link> rebus, logic, and cryptic puzzles</li>
            <li><FontAwesomeIcon icon={faPuzzlePiece} /> Compete and win in <Link className="text-puzzleBlue underline-offset-2 decoration-1 hover:underline decoration-puzzleBlue" to="/comp">online tournaments</Link>  and <Link className="text-puzzleBlue underline-offset-2 decoration-1 hover:underline decoration-puzzleBlue" to="/archive">puzzle hunts</Link></li>
            <li><FontAwesomeIcon icon={faPuzzlePiece} /> Join a fun, social, and interactive community</li>
            <li><FontAwesomeIcon icon={faPuzzlePiece} /> Develop creative and problem-solving skills</li>
          </ul>
        </div>
        <SectionHeader heading="MEET THE TEAM"/>
        <div className="flex flex-row m-4 font-raleway">
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src="https://cdn.discordapp.com/attachments/1204182270009675836/1204182310778306570/1.png?ex=6654576b&is=665305eb&hm=2c7956353f06b188ab79d5f6d81b433077790f12adb6c6e5ba2ffa8d853ef044&" alt="team member profile" />
          <div className="max-h-52 max-w-2xl text-left leading-relaxed mx-6 overflow-scroll">
            <h2><strong className="font-bold">TIMOTHY LEUNG</strong> <span>PRESIDENT</span></h2>
            <p>
              Hi, I'm Timothy, a 4th year med student and your president for this year! You may recognise me from [too long ago] as I've been in this society since the first day of uni :ckHmm:. My intro to puzzles was the MIT mystery hunt, which I hope to help write this year. I recommend you all look at it (if only to see the scale of the puzzling world 👀)
              <br/> 
              A lot of my time these days is either spent gaming, at bouldering, or playing maimai. I listen to mostly Japanese music, so any jpop recs are welcome :{'>'} :blobMelt:
            </p>
          </div>
        </div>
        <div className="flex flex-row m-4 font-raleway">
          <div className="max-h-52 max-w-2xl text-right leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold">LUKE YANG</strong> <span>SECRETARY</span></h2>
            <p>
            Hey guys, its Luke 😄 .
            I am secretary for Puzzlesoc in 2024 yay! 🥳 Currently, I am 3rd Year studying Computer Science/Science at UNSW. 
            <br/>
            My hobbies include cooking 🍳 , Football ⚽ , chronically watching Youtube , and touching grass (occasionally).  👯‍♂️ 
            Some of my favourite puzzles include Latin Squares, Minesweeper 🏁 , Rebus, Loldle and figuring out how to get to Central. 🤣
            My puzzle shows how I love food and where my next travel destination is, so if you solve it pls come with me. 🥺 
            </p>
          </div>
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src="https://cdn.discordapp.com/attachments/1204182270009675836/1204182509978394624/2.png?ex=6654579b&is=6653061b&hm=6518ca98444fd90952989c1971870b847a6f8025af16800b9f5b2fb6e430dbb8&" alt="team member profile" />
        </div>
        <div className="flex flex-row m-4 font-raleway">
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src="https://cdn.discordapp.com/attachments/1204182270009675836/1204182520434790470/3.png?ex=6654579d&is=6653061d&hm=f9acafa2e98daabdbe27551ff2003f23ff738b4ca702db2eac275098d2389c45&" alt="team member profile" />
          <div className="max-h-52 max-w-2xl text-left leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold">ALISON LIN</strong> <span>ARC DEL/TREASURER</span></h2>
            <p>
            Hellooo I'm Alison and I'm a 2nd year studying physio! I'm the arc delegate & treasurer for this year. 🙂 🙂 
            <br/>
            I'm not very good at puzzles but if you start a puzzle race, it is nearly guaranteed that I will join the puzzle then proceed to leave it incomplete after realising I don't know where to begin. 🤡 My favourite puzzles are the few logic ones I can solve (ie. skyscrapers and LITS). :W_puzzle:
            <br/>
            Apart from unsuccessfully attempting puzzles, I also like going to the beach, hanging out with friends, listening to the same songs on repeat, and playing the piano. I also love to spam emojis when I message so be prepared. :huh: 
            </p>
          </div>
        </div>
        <div className="flex flex-row m-4 font-raleway">
          <div className="max-h-52 max-w-2xl text-right leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold">JORDAN WUNSCH</strong> <span>PUZZLE EVENTS</span></h2>
            <p>
            Hey everyone! I’m Jordan and I’m in my third year studying economics and commerce, and I’m also one of the Puzzle Events Directors for this year!
            When I’m not working I’m usually reading (fantasy and sci fi are the best), gaming or struggling to play guitar.
            <br/>
            Over the past year I’ve gotten to like all kinds of puzzles but my favourites when I started were rebuses both because they were the only ones I could even remotely solve and because they are very satisfying when they click.
            </p>
          </div>
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src="https://cdn.discordapp.com/attachments/1204182270009675836/1204409714494935060/4.png?ex=66552b34&is=6653d9b4&hm=40ca8fa45f2c10b2641bbc8a3fc0369f5524c279455aa5b6fa1f98d8241f1226&" alt="team member profile" />
        </div>
        <div className="flex flex-row m-4 font-raleway">
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src="https://cdn.discordapp.com/attachments/1204182270009675836/1204409750025146429/5.png?ex=66552b3d&is=6653d9bd&hm=d4bc2e914b4eba5f78647cb3fbaf4779e7aa1ab21d53eabee2632ddf10503fdd&" alt="team member profile" />
          <div className="max-h-52 max-w-2xl text-left leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold">JIAN WANG</strong> <span>PUZZLE EVENTS</span></h2>
            <p>
            Hey guys! I'm Jian and I'm one of your fellow Puzzle Events Directors 🧩 for this year! I am currently in second year and studying an actuarial studies/computer science degree. Some of my hobbies include sleeping, eating yummy food, light gaming and the last one can be figured out through my puzzle below!
            <br/>
            Now, some of my favourite puzzles include cryptics, rebus and basically any puzzle with a creative mechanism! These are especially satisfying when you solve them 🧐. Other things I also enjoy doing are hanging out with friends, card games and the occasional ice skating (even when it's cold).
            <br/>
            I'm definitely excited for what this year will bring and I'm looking forward to seeing you all! Also, if you see me on campus, feel free to say hi!
            </p>
          </div>
        </div>
        <div className="flex flex-row m-4 font-raleway">
          <div className="max-h-52 max-w-2xl text-right leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold">TIM WAN</strong> <span>SOCIAL EVENTS/GRIEVANCE OFFICER</span></h2>
            <p>
            Heya! 🙂 My name is Tim and I'm a third year studying computer science!  I'll be the social events director and grievance officer for 2024, so feel free to say hi to me at any activity, I promise I'll be friendly!
            <br/>
            I love puzzles, as evident in doing those nyt mini dailies everyday (except when i forget, which is often), so I really like word puzzles. However, my absolute favourite ones are when a really unique or creative mechanic is used - solving those feel super satisfying {'>_<'}.
            <br/>
            Outside of puzzles, i really like hanging with friends, listening to music (drop recs!), playing piano/trumpet/guitar, going to the arcade, playing board games and taking walks.
            </p>
          </div>
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src="https://cdn.discordapp.com/attachments/1204182270009675836/1204409813036040243/6.png?ex=66552b4c&is=6653d9cc&hm=04873a410e1ef0e0d1925a68203c19869792f2409bee879cbf866ef111ea664e&" alt="team member profile" />
        </div>
        <div className="flex flex-row m-4 font-raleway">
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src="https://cdn.discordapp.com/attachments/1204182270009675836/1204409840735363112/7.png?ex=66552b52&is=6653d9d2&hm=60944858617d7ee08c12836fa99120ecb7a46e929feb0e80690d0704520e37d0&" alt="team member profile" />
          <div className="max-h-52 max-w-2xl text-left leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold">EMILY NING</strong> <span>DESIGN</span></h2>
            <p>
            Hallo everyone!! I'm Em, a 2nd year computer science student, and the Design Director for this year! ~☆
            <br/>
            My fav puzzles are rebuses and logic puzzles! (anything without huge blocks of text (Ｔ▽Ｔ) ironic i know).  In my free time I like to draw/make scrapbooks, watch cartoons (feel free to discuss shows with me), hang out with friends, rollerblade, and play musical instruments (i own a lot). I listen to a variety of music genres but my fav is pop punk.
            </p>
          </div>
        </div>
        <div className="flex flex-row m-4 font-raleway">
          <div className="max-h-52 max-w-2xl text-right leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold">PETER YANG</strong> <span>MARKETING</span></h2>
            <p>
            Hey guys, I’m Peter! I study CS / MATH (recently transferred from ACTL 🤡) and I’m the Marketing Director this year!!
            <br/>
            I like to visualise my puzzles 🤔 and therefore I enjoy puzzles like rebus and Quintessential.
            <br/>
            My favourite (non-alcoholic) drink is kombucha 🤤 but I also get bubble tea every second day 🙈 (basically whenever I leave the house). I also love reading Webnovels 💀 in my spare time.
            <br/>
            Follow us on socials 😃😃
            </p>
          </div>
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src="https://cdn.discordapp.com/attachments/1204182270009675836/1204409875401277471/8.png?ex=66552b5b&is=6653d9db&hm=d17fa9585426e37a8a76e440050f1f052870684b7ec28ba2e4ad9a5dda81eac1&" alt="team member profile" />
        </div>
        <div className="flex flex-row m-4 font-raleway">
          <img className="max-h-52 rounded drop-shadow duration-100 hover:scale-105" src="https://cdn.discordapp.com/attachments/1204182270009675836/1204908898809815151/ck.png?ex=6654591b&is=6653079b&hm=8a816ab2afb76ecb587273c9b64df240bcbe1a76b6788037259c6727a6eff746&" alt="team member profile" />
          <div className="max-h-52 max-w-2xl text-left leading-relaxed mx-6 overflow-scroll">
          <h2><strong className="font-bold">CK</strong> <span>MASCOT</span></h2>
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
        <div className="flex flex-row min-w-full justify-center items-center mt-5 dark:bg-white dark:opacity-80 py-5 transition duration-200">
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
