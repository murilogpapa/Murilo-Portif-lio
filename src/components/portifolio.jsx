import React from "react";
import Navbar from './navbar.jsx';

const Portifolio = ({ onNavItemClick, activeItem }) => {
  return (
    <div className="min-w-[71rem] h-[60rem] bg-[#191919] rounded-3xl ml-5 ">
      <div className="grid grid-cols-2 mx-12 ">
        <div className="my-4 mt-7 text-3xl font-bold text-white text-left"> 
          <h2> Portifólio </h2>
          <div className="mt-4 h-2 w-16 rounded-full bg-blue-500"></div>
        </div>
        <Navbar onNavItemClick={onNavItemClick} activeItem={activeItem} />
      </div>
      <div className="mx-12 mt-2 text-left text-xl">
        <p>Conteúdo sobre portifólio...</p>
      </div>
    </div>
  );
};

export default Portifolio;