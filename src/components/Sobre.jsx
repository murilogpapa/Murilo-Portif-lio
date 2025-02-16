import React from "react";
import Navbar from './navbar.jsx';
import Carrosel from "./carrosel.jsx";

const Sobre = ({ onNavItemClick, activeItem }) => {
  return (
    <div className="min-w-[71rem] h-[60rem] bg-[#191919] rounded-3xl ml-5 ">
      <div className="grid grid-cols-2 mx-12 ">
        <div className="my-4 mt-7 text-3xl font-bold text-white text-left"> 
          <h2> Sobre Mim </h2>
          <div className="mt-4 h-2 w-16 rounded-full bg-blue-500"></div>
        </div>
        <Navbar onNavItemClick={onNavItemClick} activeItem={activeItem} />
      </div>
      <div className="mx-12 mt-2 text-left text-xl">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla maximus nunc, vel placerat justo. Donec fringilla porttitor pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vel efficitur elit. Nunc eu tellus nec mi ultricies feugiat. Phasellus id maximus magna. Proin id pharetra odio. Donec sed turpis quis odio venenatis egestas. Sed ligula elit, posuere eget nisl ac, imperdiet efficitur libero. Nunc hendrerit, justo pharetra imperdiet commodo, justo diam ultricies neque, non fermentum ante dui ut lacus. Proin eu placerat velit. Aenean vestibulum et nisi sed placerat. Donec id lorem non orci pulvinar dapibus quis a nunc. Donec malesuada turpis vel ultricies iaculis.</p>
        <br></br>
        <p>Sed arcu nunc, gravida finibus tristique in, ultrices sed ante. Sed sollicitudin lacus nec orci cursus, quis feugiat nisl cursus. Praesent id euismod ante, vel sodales velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent ante justo, fermentum et tempus vel, semper id lorem. Sed consectetur, nibh eu malesuada ultricies, eros felis placerat libero, id interdum ante lectus non ante. Aenean eget volutpat nisi. Nullam eu metus ligula. In eu tellus ut mi commodo auctor.</p>
      </div>
      <div className="grid grid-cols-2 mx-12 ">
        <div className="my-4 mt-7 text-3xl font-bold text-white text-left"> 
          <h3> Skills </h3>
          <div className="mt-4 h-2 w-8 rounded-full bg-blue-500"></div>
        </div>
      </div>
      <div className=" scale-115 mt-2">
        <Carrosel />
      </div>
    </div>
  );
};

export default Sobre;