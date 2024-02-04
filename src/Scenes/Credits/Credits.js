import React from 'react';
import Background1 from "../../img/Backgrounds/Modern-School1.png";
import './Credits.css'

const Credits = () => {
  return (
    <main className='main-credits' style={{ backgroundImage: `url(${Background1})` }}>
      <h1>Créditos</h1>
      <div className='center-credits'>
        <h3>Desenvolvido por Bruno Silva (Gerard Martinus)</h3>
        <p className='text'>Este é um teste de visual novel com o Framework React</p>
        <a href='/'>Voltar</a>
      </div>
    </main>
  );
}

export default Credits;
