import React from 'react';

import './Header.css'
import logoPale from '../../../../images/Logo_Pale_Negativo_Imagen.png';

export function Header() {
  return(
    <header className="header">
      <nav className="header__navbar">
        <a className="header__brand" href="#top">
          <img className="header__brand-image" src={logoPale} alt="logoPale"></img>  
        </a>
        <div className="header__menu">
          <ul className="header__menu-list">
            <li>SOBRE</li>
            <li>SOLUCIONES</li>
            <li>CLIENTES</li>
          </ul>
        </div>
        <div className="header__burger">
          <span></span>
          
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}