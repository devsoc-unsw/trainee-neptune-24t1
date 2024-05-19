// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer () {
  return (
    <>
      {/* <div className="fixed bottom-0"> */}
        <div className="bg-slate-100 flex justify-between p-6 fixed bottom-0 min-w-full">
            <span>&copy; UNSW Puzzle Society</span>
            <div className="flex space-x-6">
              <a href="https://discord.gg/2MqMrs2MG8" className="text-blue-600 hover:text-blue-900 transition duration-300">
                <FontAwesomeIcon icon={faDiscord} size="lg" />
              </a>
              <a href="https://www.instagram.com/puzzlesoc_unsw/" className="text-pink-600 hover:text-pink-900 transition duration-300">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://www.facebook.com/UNSWPuzzleSoc" className="text-blue-600 hover:text-blue-900 transition duration-300">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
            </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Footer;
