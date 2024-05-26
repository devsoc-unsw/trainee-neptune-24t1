import React from 'react';

import Footer from '../components/Footer';
import NavigationBar from '../components/Navigation';
import SectionHeader from '../components/SectionHeading';

import Aquarium from '../assets/Logics/Aquarium.png'
import Hashi from '../assets/Logics/Hashi.png'
import Minesweeper from '../assets/Logics/Minesweeper.png'
import Nonogram from '../assets/Logics/Nonogram.png'
import Pipes from '../assets/Logics/Pipes.png'
import Shikaku from '../assets/Logics/Shikaku.png'

function DisplayComponent ({ img, component, text }: {img: string, component: string, text: string }) {
  return (
    <div className="flex flex-col w-full items-center mb-10">
      <div className="mb-3">
        <img src={img} className="place-self-center"></img>
      </div>
      <div className="text-left font-raleway bg-slate-100 border-slate-300 border p-3 mx-3 h-56">
        <p className="text-lg text-center"><b>{component}</b></p>
        <p>{text}</p>
      </div>
    </div>
  )
}

function imageClick () {

}

function DisplayExample ({ solution, img }: { solution:string, img:string }) {
  return (
    <div className="flex flex-col">
      <img src={`${img}`}></img>
      <details className="mt-3 bg-gray-200 py-3 px-5">
        <summary className="hover:cursor-pointer">Show solution</summary>
        <p className="ml-5 mr-3 my-1 overflow-y-auto max-h-36"><i>{solution}</i></p>
      </details>
    </div>
  )
}

function DisplayLeft ({ img, title, text }: { img:string, title:string, text:string }) {
  return (
    <div className="flex flex-row m-3 bg-slate-100 max-h-60 aspect-square">
      <img onClick={e => imageClick()} src={img} className="p-5"></img>
      <div className="place-self-center pr-8 text-right font-raleway text-xl">
        <p className="text-3xl pb-3"><b>{title}</b></p>
        <p>{text}</p>
      </div>
    </div>
  )
}

function DisplayRight ({ img, title, text }: { img:string, title:string, text:string }) {
  return (
    <div className="flex flex-row m-3 bg-slate-100 max-h-60 aspect-square">
      <div className="place-self-center pl-8 text-left font-raleway text-xl">
        <p className="text-3xl pb-3"><b>{title}</b></p>
        <p>{text}</p>
      </div>
      <img src={img} className="p-5"></img>
    </div>
  )
}

function Rebus() {
  return (
    <div className="flex flex-col items-center">
      <SectionHeader heading="REBUS" /> 
      <div className="flex flex-col w-3/5 place-self-center font-raleway text-left text-xl p-5">
      <p>A rebus is a type of visual puzzle where words and images are used in abstract ways to represent an answer which are usually common phrases, idioms and can even be a single word. These puzzles typically target visual perception and creative thinking skills.</p>
        <p className="py-3">General components to look out for are:</p>
        <br></br>
        <strong>Position</strong>
        <p>The way words or images are positioned can cue prepositions such as in, on, above, below, over, and under which can be a part of the final answer.</p>
        <br></br>
        <strong>Size</strong>
        <p>If words or objects are unusually bigger or smaller, the size may be part of the final answer.</p>
        <br></br>
        <strong>Direction</strong>
        <p>Take note of the direction a word is running along. For example, if words are running vertically, you may need to include the word 'up' or 'down' in your final answer.</p>
        <br></br>
        <strong>Colour</strong>
        <p>If a word or object is randomly/the only one that's coloured, then there is a high chance that the colour will be part of the final answer.</p>
        <br></br>
        <strong>Style</strong>
        <p>There are a variety of ways objects and words can be presented. For example, if there is only half an image, then most likely you only need to include half of what it represents.</p>
      </div>

      <div className="mt-16"></div>
      <SectionHeader heading="Examples"/>
      <div className="flex flex-col place-self-center w-4/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-16 place-self-center text-left">
          <DisplayExample
            solution="Notice that there is a running star and a tee shirt. We can shorten the tee shirt to just 'tee' to get 'a running star' + 'tee'. Combining these together we get 'a running start' which is our final answer."
            img="https://scontent.fsyd3-2.fna.fbcdn.net/v/t39.30808-6/427881775_376524211754472_3977462887851308538_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2wQj5v-Fh4YQ7kNvgFSNQhX&_nc_ht=scontent.fsyd3-2.fna&oh=00_AYCspsLu8AQ7UTVXbuDuNSrUQomf4UqXVwv4dM4y5IbqnQ&oe=6656AD54"
          />
          <DisplayExample
            solution="The ellipse outside 'The Rosie' resembles a ring. Now thinking of some prepositions, we find that 'around' works the best as this gives us 'Ring around The Rosie' which is our final answer."
            img="https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/431368313_391607733579453_5627088026296427759_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Egc4P2X8g68Q7kNvgFbmKTr&_nc_ht=scontent.fsyd3-1.fna&oh=00_AYAWNZeCC05wI2t63BHQAdWzMNl9u41hn4-twd9BdBuH7w&oe=6656AE15"
          />
          <DisplayExample
            solution="We can see that there is a bee on top of a bell. However that doesn't straight away give us anything so we must look closer to the noise symbols. This tells us it is actually a bee on ding. If we write this out we get bonding, which is our final answer."
            img="https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/435065715_407911401949086_8469336516791600997_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QDj4tdKIGZQQ7kNvgH86JfJ&_nc_ht=scontent.fsyd3-1.fna&oh=00_AYCtf9B8OMH05wwqAB2898nXFQBed-vfUq_ZOl78DA4ERg&oe=6656B39A"
          />
        </div>
      </div>
      <div className="mb-10"></div>
    </div>
  );
}

function Logic () {
  return (
    <div className="flex flex-col items-center">
      <SectionHeader heading="LOGIC"/>
      <div className="flex flex-col w-3/5 font-raleway text-left text-xl m-5">
        <p>Logic puzzles are grid puzzles like sudoku that come with a variety of different rules and styles. These aim to challenge deductive reasoning, comprehension and logic skills where you narrow different possibilities or aim to make the best choice out of many possibilities.</p>
      </div>
      <p className="text-3xl font-raleway mt-14"><b>Some Example Types:</b></p>

      <div className="flex flex-col w-3/5 px-5 mt-5">
        <DisplayLeft img={Minesweeper} title="Minesweeper" text="The goal of the game is to clear every non-landmine box and mark every landmine cell with a flag. A number tells you how many landmines there are in the surrounding 8 cells. One tip is to clear random cells at the beginning of the game."/>
        <DisplayRight img={Pipes} title="Pipes" text="The goal of the game is to make sure all pipes are connected and flow with water by rotating each pipe. A tip is to start with edge pieces that connect to three other pipes since you know that it must connect to three other pipes and there are only three other sides it can connect to."/>
        <DisplayLeft img={Nonogram} title="Nonogram" text="The goal of the game is to figure out which cells to fill in based on the numbers on the outside. A number tells you how many cells are filled in each row/column. A tip is to start on the row/column with the highest number and deduce which cell is filled throughout all possibilities."/>
        <DisplayRight img={Aquarium} title="Aquarium" text="The goal of the game is to fill each region with a section of water. The rules are identical to the nonogram with an extra one. For each tank, if there is water in a cell, then cells in the same row or below must be filled due to the laws of physics."/>
        <DisplayLeft img={Hashi} title="Hashi" text="The goal of this game is to connect all islands (circles) with each other. The number on a circle depicts how many bridges (lines) it has that are connected to other islands. An island can only have max two bridges."/>
        <DisplayRight img={Shikaku} title="Shikaku" text="The goal of this game is to fill the entire grid with smaller rectangles. A number depicts the area of the rectangle it's in. For example we can see that rectangles with the number 3 has an area of 3. Rectangles can be any width and height."/>
      </div>

      <SectionHeader heading="Examples"/>
      <div className="flex flex-col place-self-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 p-5 mt-8 gap-8 place-self-center text-left">
          <DisplayExample
            solution="The rules for this logic puzzle is simple, we must only traverse either horizontally or vertically in a consecutive path from number 1 to 81. Since we don't have definitive information about where 1 should be, we can start with 2 and come back to 1 later. Notice the only way to get from 3 to 5 is to place a 4 below the 5. Then to get from 5 to 8, we must go above 5 to 6 then left to 7 and left to 8. We continue this path of thinking until we reach 81 then we trace from the green arrow and collect all the numbers, indexing them with the alphabet and wrapping around to yield an answer."
            img="https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/428608918_380247801382113_37063456505260312_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FF3VP1T8FvoQ7kNvgHY0qZl&_nc_ht=scontent.fsyd3-1.fna&oh=00_AYBkLjavJdlVjDkEBwqSAtCfxHQDbxEWvcwZraRZnSIeKw&oe=66590F1A"
          />
          <DisplayExample
            solution="TBA"
            img="https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/430915764_388165153923711_8890790327536728054_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yi_9eLA4E7kQ7kNvgEcR6gg&_nc_ht=scontent.fsyd3-1.fna&oh=00_AYBHeGCB9IEHEPCxAKGxjGYa41RK94DGYfAnARv1LxLgug&oe=6658FBF3"
          />
          <DisplayExample
            solution="TBA"
            img="https://scontent.fsyd3-2.fna.fbcdn.net/v/t39.30808-6/437929596_412043868202506_9018495140568725692_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=2XoRgJ2EluIQ7kNvgHyG_5M&_nc_ht=scontent.fsyd3-2.fna&oh=00_AYA-jMbZPe_Im-OC-x7LI5r--Hl9sbyC6GbyjPZPt9OAkQ&oe=66590570"
          />
        </div>
      </div>

      <div className="mb-10"></div>
    </div>
  );
}

function Cryptic () {
  return (
    <div className="flex flex-col">
      <SectionHeader heading="CRYPTIC"/>
      <div className="flex flex-col w-3/5 place-self-center font-raleway text-left text-xl p-5">
        <p>A cryptic clue is similar to a riddle but contains 3 important parts: definition, cue and the leftovers. The definition is usually a word (or more) either at the start or the end of a clue. Cue words or phrases hint at what you should do with leftovers to obtain part of or the final answer. Cryptics target pattern recognition, critical thinking and comprehension skills.</p>
        <p className="py-3">Common cues used are:</p>
        <br></br>
        <strong>Anagrams</strong>
        <p>Words such as "mixed", "confused", "unsteady" can cue an anagram where you would need to rearrange a word to form another.</p>
        <br></br>
        <strong>Hidden Answers</strong>
        <p>Words can sometimes be hidden inside other words or phrases. Some cues to this are "grips", "eaten" or "swallowed"</p>
        <br></br>
        <strong>Homophones</strong>
        <p>Words relating to sound or speech such as "heard", "said", "yelled" can signal to look for homophones.</p>
        <br></br>
        <strong>Reversals</strong>
        <p>Words like "back", "rewind" or "mirrored" can cue to reverse the order of words.</p>
        <br></br>
        <strong>Deletions</strong>
        <p>Words can also cue to remove parts of a word such as "headless" or "no tail" which remove the first and last letter respectively.</p>
      </div>
      <div className="mt-10"></div>

      <SectionHeader heading="Examples"/>
      <div className="flex flex-col place-self-center w-4/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-16 place-self-center text-left">
          <DisplayExample solution="'Unsalted' is the cue, and from chemistry we know that salt is NaCl. Then we notice that the word barnacle contains the letters from NaCl. So we remove those letters from barnacle which leaves us with 'bare'. This aligns with the definition word of 'plain' and hence the answer is 'bare'." img="https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/428613497_381327351274158_7429692494230726708_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Wg02bgWEeJcQ7kNvgH560Mr&_nc_ht=scontent.fsyd3-1.fna&oh=00_AYBZjrt2_7__Z7mStIpvdOkUuMYTS4Pz6NxkGRZTE0YOgw&oe=6656086C"/>
          <DisplayExample solution="Notice that 'My name is...' is specifically in quotes. Another way of saying this is 'I'm'. Now, another word for sender is 'poster' and when we combine these together, we get 'imposter' which aligns with the definition word 'fake' and hence is our final answer." img="https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/430172762_385103177563242_2835744654873056541_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XwEQiAzpaqAQ7kNvgGqaaPP&_nc_ht=scontent.fsyd3-1.fna&oh=00_AYDtviZx3dJbWEl49hoK0Wm7JO6BOsirG4VCzqKKPKx_iQ&oe=66560FE9"/>
          <DisplayExample solution="'Starting' is a cue for using initials and hence taking the 'two starting' initials of 'searching' we get 'se'. Now we need 'an antidote' AFTER 'se'. Another word for antidote is 'cure' and when we piece them together, we get 'secure' which fits the defintion word 'obtain' and is our final answer." img="https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/433501398_400766139330279_6373752198853041375_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MIMVSCkM4RcQ7kNvgGYAG5h&_nc_ht=scontent.fsyd3-1.fna&oh=00_AYCifcSJQ1_34_5mA_20zXqwHBXprWQQPdLtne9QyHHqAA&oe=665629D7"/>
        </div>
      </div>
      <div className="mb-10"></div>

    </div>
  );
}

function Minipuzz () {
  return (
    <div className="flex flex-col">
      <SectionHeader heading="MINIPUZZ"/>
      <div className="flex flex-col w-3/5 place-self-center font-raleway text-left text-xl p-5">
        <p>Minipuzzes, short for mini puzzles can be any type of puzzle not limited to just rebus, logics or cryptics. These can be a combination of many puzzles types or can be just one type. Minipuzzes can typically be broken into two sections: the initial solve and extraction.</p>
        <br></br>
        <p><b>Initial Solve:</b></p>
        <p>The initial solve can be as simple as filling in a grid, solving a cryptic, rebus or simply just some kind of solving mechanic like translating from codes and ciphers.</p>
        <br></br>
        <p><b>Extraction:</b></p>
        <p>Typically, the type of extraction will always be hinted in the given text (also known as flavour text) through cue words that link to some sort of extraction mechanism or instruction. Next you'll want to think of how you can apply this to the result of your initial solve.</p>
      </div>
      <SectionHeader heading="Examples"/>
      <div className="flex flex-col place-self-center w-4/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-16 place-self-center text-left">
          <DisplayExample
            solution="You might notice some of these words actually come from phrases with the first word missing. These phrases are 'one small step for man', 'two can play at that game', 'three strikes and you're out' and 'four horsemen of the apocalypse'. Next we draw four lines linking the boxes in order of the numbers in the phrases respectively. This will make out the answer 'spin'."
            img="https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/430982886_387069637366596_8701555422166210618_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5KHb75JggNoQ7kNvgGKLoII&_nc_ht=scontent.fsyd3-1.fna&oh=00_AYB2EEerw4HYhbJfocMmWYbwjiMvgkgne407M6O48TEVIw&oe=66591DE4"
          />
          <DisplayExample
            solution="The phrases'back to front' and 'same message' hint at finding palindromes for each line. Ewe, SOS, ere, madam, APA, solos, gag, kayak. Taking the 'unique' letters we get the answer 'wordplay'."
            img="https://scontent.fsyd3-2.fna.fbcdn.net/v/t39.30808-6/431035450_390285660378327_7298229047443792686_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xjCCBUjCBPYQ7kNvgEmY0Bm&_nc_ht=scontent.fsyd3-2.fna&oh=00_AYArBSQ3FZVOyM2EVkeQ2OFoAsy1yx0C9NyvDoQH2OS7pQ&oe=66591316"
          />
          <DisplayExample
            solution="The first box points from s + quill + a + bull - qu which gives us 'syllable', hinting at converting the words into syllable counts. Next we have a rebus for 'letter' where we convert our syllable counts into letters. Then the 'alphabet mirror' rebus tells us to 'mirror' the letters we have across the middle of the alphabet. Finally, there is an image of what looks like a wheel turning forward with a 5 above it. This cues at shifting the letters forward by 5. We then have an arrow facing up, suggesting we read the letters from bottom to top to yield us an answer of 'decay'."
            img="https://scontent.fsyd3-1.fna.fbcdn.net/v/t39.30808-6/437859738_414349177971975_2146388222790218514_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nQCjuaa-1SgQ7kNvgFDFO3Z&_nc_ht=scontent.fsyd3-1.fna&oh=00_AYAQtJvH3RDtUIFc8Ncz_VFqTiVKXev1Tnl-9VcyRMPl5Q&oe=66590782"
          />
        </div>
      </div>
      <div className="mb-10"></div>
    </div>
  );
}

function Guides () {
  const [puzzleType, setPuzzleType] = React.useState('rebus');

  const switchGuide = (event: React.SyntheticEvent, type: string) => {
    setPuzzleType(type);
  };

  return (
    <>
      <NavigationBar/>
      <div className="mt-10">
        <button className={`rounded-l-lg py-2 px-4 transition duration-300 ${puzzleType === 'rebus' ? 'bg-blue-100' : 'bg-gray-100 hover:bg-blue-100'}`} onClick={e => switchGuide(e, 'rebus')}>Rebus</button>
        <button className={`border-x py-2 px-4 transition duration-300 ${puzzleType === 'logic' ? 'bg-blue-100' : 'bg-gray-100 hover:bg-blue-100'}`} onClick={e => switchGuide(e, 'logic')}>Logic</button>
        <button className={`border-r py-2 px-4 transition duration-300 ${puzzleType === 'cryptic' ? 'bg-amber-100' : 'bg-gray-100 hover:bg-amber-100'}`} onClick={e => switchGuide(e, 'cryptic')}>Cryptic</button>
        <button className={`rounded-r-lg py-2 px-4 transition duration-300 ${puzzleType === 'minipuzz' ? 'bg-pink-100' : 'bg-gray-100 hover:bg-pink-100'}`} onClick={e => switchGuide(e, 'minipuzz')}>Minipuzz</button>
      </div>
      {puzzleType === 'rebus' && <Rebus/>}
      {puzzleType === 'logic' && <Logic/>}
      {puzzleType === 'cryptic' && <Cryptic/>}
      {puzzleType === 'minipuzz' && <Minipuzz/>}
      <Footer/>
    </>
  );
}

export default Guides;
