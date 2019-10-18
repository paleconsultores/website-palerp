//Dependencies
import React from 'react';

//Resources
import { BurgerMenu } from "./BurgerMenu";
import { MenuList } from "./MenuList";


import './Header.css'
import logoPale from '../../../../images/Logo_Pale_Negativo_Imagen.png';

export function Header() {
  const remVal = parseFloat(getComputedStyle(document.documentElement).fontSize)

  const [shouldBgChange, setShouldBgChanged] = useState(false);

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
    <header className="header">
      <nav className="header__navbar topnav">
        <a href="#Hero" className="header__brand">
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