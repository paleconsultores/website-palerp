import React from 'react';

import './Header.css'
import logoPale from '../../../../images/Logo_Pale_Negativo_Imagen.png';

export function Header() {
  function CollapseBurgerMenu() {
    var burgerMenu = document.getElementsByClassName("header__burger");
    if (burgerMenu[0].classList.contains("open")) {
      burgerMenu[0].classList.remove("open");
    } else {
      burgerMenu[0].classList.add("open");
    }
  }

  return(
    <header className="header">
      <nav className="header__navbar topnav">
        <a href="/" className="header__brand">
          <img className="header__brand-image" src={logoPale} alt="logoPale"></img>
        </a>
        <div className="header__menu">
          <ul className="header__menu-list">
            <li>SOBRE</li>
            <li>SOLUCIONES</li>
            <li>CLIENTES</li>
          </ul>
        </div>
        <div className="header__burger" onClick={CollapseBurgerMenu}>
          <span></span>
          <span></span>
          
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}