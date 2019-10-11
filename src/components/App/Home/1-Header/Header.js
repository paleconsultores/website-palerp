import React from 'react';

import './Header.css'
import logoPale from '../../../../images/Logo_Pale_Principal_Imagen.png';

export function Header() {
  return(
    <header className="header">
      <nav className="header__navbar topnav">
        <a href="/" className="header__brand">
          <img className="header__brand-image" src={logoPale}></img>  
        </a>
        <div className="header__menu ">
          <ul className="header__menu-list">
            <li> <a href="/#Information">SOBRE</a> </li>
            <li> <a href="/#Solutions">SOLUCIONES</a></li>
            <li> <a href="/#ClientesList">CLIENTES</a></li>
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