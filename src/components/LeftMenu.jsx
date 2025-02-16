import React from "react";
import MuriloIcon from '/src/assets/MuriloIcon.png';
import { faEnvelope, faLocationDot, faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSquareGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LeftMenu = () => {
  return (
    <div className="min-w-96 h-[48rem] bg-[#191919] rounded-3xl mr-5 my-[6rem] flex">
      <div className="block">
        <a href="https://www.instagram.com/murilo_papa/">
          <img src={MuriloIcon} alt="Profile" className="w-49 mx-22 mt-10 mb-4 hover:scale-103 hover:brightness-110 duration-400" />
        </a>
        <h1 className="font-bold">Murilo</h1>
        <h2 className="text-4xl">Giampiccolo Papa</h2>
        <hr className="mt-5 mx-6 text-[#393939]" />

        <div className="grid grid-cols-5 gap-4 mx-8 mt-4">
          <div className="my-2 text-[#393939]"><a href="mailto:murilopapag@gmail.com"><FontAwesomeIcon className="hover:text-blue-500 duration-200" icon={faEnvelope} size="3x" /></a></div>
          <div className="my-2 mt-5 pl-0 text-left col-span-4 font-bold">murilopapag@gmail.com</div>
          <div className="my-2 text-[#393939]"><a href="https://maps.app.goo.gl/S6feCwDmb7DkQUJh9"><FontAwesomeIcon className="hover:text-blue-500 duration-200" icon={faLocationDot} size="3x" /></a></div>
          <div className="my-2 mt-5 pl-0 text-left col-span-4 font-bold">São Paulo - Brasil</div>
          <div className="my-2 text-[#393939]"><a href="https://wa.me/5511944255805"><FontAwesomeIcon className="hover:text-blue-500 duration-200" icon={faSquarePhone} size="3x" /></a></div>
          <div className="my-2 mt-5 pl-0 text-left col-span-4 font-bold">+55 11 94425-5805</div>
        </div>
        <div className="grid grid-cols-4 mx-12 mt-4">
          <div className=" text-[#393939]"><FontAwesomeIcon className="hover:text-blue-500 duration-200" icon={faSquareGithub} size="2x" /></div>
          <div className=" text-[#393939]"><FontAwesomeIcon className="hover:text-blue-500 duration-200" icon={faLinkedin} size="2x" /></div>
          <div className=" text-[#393939]"><FontAwesomeIcon className="hover:text-blue-500 duration-200" icon={faInstagram} size="2x" /></div>
          <div className=" text-[#393939]"><FontAwesomeIcon className="hover:text-blue-500 duration-200" icon={faDiscord} size="2x" /></div>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;