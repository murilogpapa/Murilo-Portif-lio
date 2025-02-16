import React from "react";

const Navbar = ({ onNavItemClick, activeItem }) => {
  const navItems = [
    { name: 'Sobre', label: 'Sobre' },
    { name: 'Aprendizado', label: 'Aprendizado' },
    { name: 'Portifolio', label: 'Portifólio' },
    { name: 'Contato', label: 'Contato' }
  ];

  return (
    <div className="bg-[#393939] w-[35.5rem] h-23 rounded-tr-3xl rounded-bl-3xl text-white">
      <div className="grid grid-cols-4 gap-2 mx-4 mt-8 text-xl font-bold">
        {navItems.map(item => (
          <div key={item.name}>
            <h2
              className={`hover:text-blue-500 duration-300 cursor-pointer ${activeItem === item.name ? 'text-blue-500' : ''}`}
              onClick={() => onNavItemClick(item.name)}
            >
              {item.label}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;