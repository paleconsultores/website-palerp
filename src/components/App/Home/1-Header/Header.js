//Dependencies
import React from 'react';

//Resources
import { BurgerMenu } from "./BurgerMenu";
import { MenuList } from "./MenuList";


import './Header.css'
import logoPale from '../../../../images/Logo_Pale_Negativo_Imagen.webp';

export function Header() {
  return(
    <header className="header">
      <nav className="header__navbar topnav">
        <a href="/" className="header__brand">
          <img className="header__brand-image" src={logoPale} alt="logoPale" />
        </a>
        <BurgerMenu />
        <div className="header__menu">
          <MenuList />
        </div>
      </nav>
    </header>
  );
}