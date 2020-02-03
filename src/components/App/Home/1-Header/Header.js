// Dependencies
import React, { useState, useEffect } from 'react';

// Resources
import { BurgerMenu } from "./BurgerMenu";
import { MenuList } from "./MenuList";

import './Header.css'
import logoPaleNegativo from '../../../../images/Logo_Pale_Negativo_Imagen.png';
import logoPalePrincipal from '../../../../images/Logo_Pale_Principal_Imagen.png';

export function Header() {

  // Get the rem unit value in pixels
  const remVal = parseFloat(getComputedStyle(document.documentElement).fontSize);

  // Boolean state to change the styles of the navigation bar
  const [shouldBgChange, setShouldBgChanged] = useState(false);

  // Effect to check if the navigation bar should change styles
  useEffect(function () {
    function onScroll() {
      const changeBackground = window.scrollY > (window.innerHeight - 5.5 * remVal);

      if (shouldBgChange !== changeBackground) {
        setShouldBgChanged(changeBackground);
      }
    }
    document.addEventListener("scroll", onScroll)
  });

  return(
    <header className={'header ' + (shouldBgChange ? 'header--positive' : '')}>
      <nav className="header__navbar topnav">
        <a href="/#Hero" className="header__brand">
          <img className="header__brand-image" src={shouldBgChange && window.innerWidth > 1011 ? logoPalePrincipal : logoPaleNegativo} alt="logoPale" />
        </a>
        <BurgerMenu />
        <div className={'header__menu ' + (shouldBgChange && window.innerWidth > 1011 ? 'header__menu--positive' : '')}>
          <MenuList />
        </div>
      </nav>
    </header>
  );
}