//Dependencies
import React from 'react';

//Resources
import './BurgerMenu.css';

export function BurgerMenu() {

  // function to add and remove classes when you click the burger menu
  function CollapseBurgerMenu() {
    const burgerMenu = document.getElementsByClassName("burger-menu");
    const menuList = document.getElementsByClassName("header__menu");

    if (burgerMenu[0].classList.contains("burger-menu--open")) {
      burgerMenu[0].classList.remove("burger-menu--open");
      menuList[0].classList.remove("header__menu--show");
    } else {
      burgerMenu[0].classList.add("burger-menu--open");
      menuList[0].classList.add("header__menu--show");
    }
  }

  return (
    <div className="burger-menu" onClick={CollapseBurgerMenu}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}