import React, { useState } from "react";
import Sobre from './Sobre.jsx';
import Aprendizado from './aprendizado.jsx';
import Portifolio from './portifolio.jsx';
import Contato from './contato.jsx';

const ContentMenu = () => {
  const [activeComponent, setActiveComponent] = useState('Sobre');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Sobre':
        return <Sobre onNavItemClick={setActiveComponent} activeItem={activeComponent} />;
      case 'Aprendizado':
        return <Aprendizado onNavItemClick={setActiveComponent} activeItem={activeComponent} />;
      case 'Portifolio':
        return <Portifolio onNavItemClick={setActiveComponent} activeItem={activeComponent} />;
      case 'Contato':
        return <Contato onNavItemClick={setActiveComponent} activeItem={activeComponent} />;
      default:
        return <Sobre onNavItemClick={setActiveComponent} activeItem={activeComponent} />;
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
};

export default ContentMenu;