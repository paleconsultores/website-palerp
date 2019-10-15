//Dependencies
import React from 'react';

//Resources
import { BurgerMenu } from "./BurgerMenu";
import { MenuList } from "./MenuList";


import './Header.css'
import logoPale from '../../../../images/Logo_Pale_Negativo_Imagen.png';

export function Header() {
  return(
    <header className="header">
      <nav className="header__navbar topnav">
        <a href="/" className="header__brand">
          <img className="header__brand-image" src={logoPale} alt="logoPale" />
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
        <BurgerMenu />
        <div className="header__menu">
          <MenuList />
        </div>
      </nav>
    </header>
  );
}