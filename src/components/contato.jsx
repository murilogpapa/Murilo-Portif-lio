import React from "react";
import Navbar from './navbar.jsx';

const Contato = ({ onNavItemClick, activeItem }) => {
  return (
    <div className="min-w-[71rem] h-[60rem] bg-[#191919] rounded-3xl ml-5 ">
      <div className="grid grid-cols-2 mx-12 ">
        <div className="my-4 mt-7 text-3xl font-bold text-white text-left"> 
          <h2> Contato </h2>
          <div className="mt-4 h-2 w-16 rounded-full bg-blue-500"></div>
        </div>
        <Navbar onNavItemClick={onNavItemClick} activeItem={activeItem} />
      </div>
      <div className="mx-12 mt-2 text-left text-xl">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">Entre em contato</h1>
          <form target="_blank" action="https://formsubmit.co/murilopapag@gmail.com" method="POST">
            <div className="form-group mb-4">
              <div className="form-row flex space-x-4">
                <div className="col w-1/2">
                  <input type="text" name="name" className="form-control w-full p-2 rounded-xl" placeholder="Nome de contato" required />
                </div>
                <div className="col w-1/2">
                  <input type="email" name="email" className="form-control rounded-xl w-full p-2" placeholder="Endereço de Email" required />
                </div>
              </div>
            </div>
            <div className="form-group mb-4">
              <textarea placeholder="Sua mensagem" className="form-control w-full p-2 rounded-xl" name="message" rows="10" required></textarea>
            </div>
            <button type="submit" className="hover:scale-105 rounded-xl text-white py-2 px-4">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;