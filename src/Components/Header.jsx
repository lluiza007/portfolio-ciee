import React from 'react';
import '../Styles/Header.css';
import Sicoob from '../img/sicoob.png'
import Sumario from './Sumario';

const Header = ({ abrirSumario }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={Sicoob} alt="Logo Sicoob" className="logo" />
      </div>
     
    </header>
  );
};

export default Header;
