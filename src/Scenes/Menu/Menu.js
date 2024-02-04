import React from 'react';
import Background1 from "../../img/Backgrounds/Modern-School1.png";
import './Menu.css'

const Menu = () => {
  return (
    <main className='main-menu' style={{ backgroundImage: `url(${Background1})` }}>
      <h1>A Jornada do Destino</h1>
      <div className='center-menu'>
        <a href='/game'>Jogar</a>
        <a href='/credits'>Creditos</a>
      </div>
    </main>
  );
}

export default Menu;
