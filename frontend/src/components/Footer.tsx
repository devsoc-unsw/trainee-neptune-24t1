// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faDiscord, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer () {
  return (
    <>
      <div className="bg-slate-100 flex justify-between p-6 fixed bottom-0 min-w-full">
          <span>&copy; UNSW Puzzle Society</span>
          <div className="flex space-x-6">
            <a href="https://discord.gg/2MqMrs2MG8" target="_blank" className="text-[#7289da] hover:text-blue-900 transition duration-300">
              <FontAwesomeIcon icon={faDiscord} size="lg" />
            </a>
            <a href="https://www.instagram.com/puzzlesoc_unsw/" target="_blank" className="text-pink-600 hover:text-pink-900 transition duration-300">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://www.facebook.com/UNSWPuzzleSoc" target="_blank" className="text-blue-600 hover:text-blue-900 transition duration-300">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://www.youtube.com/@unswpuzzlesoc/" target="_blank" className="text-red-600 hover:text-red-900 transition duration-300">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a href="mailto:unswpuzzlesoc@gmail.com" className="text-slate-400 hover:text-slate-800 transition duration-300">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
          </div>
      </div>
    </>
  );
}

export default Footer;
