// Dependencies
import React from "react";

// Resources
import './MenuList.css';

export function MenuList() {
  return (
    <ul className="menu-list">
      {/* <li><a href="#AboutUs">Nosotros</a></li> */}
      <li><a href="#Solutions">Servicios</a></li>
      <li><a href="#Carousel">Productos</a></li>
      <li><a href="#ClientList">Clientes</a></li>
      <li><a href="#ContactUs">Contáctanos</a></li>
    </ul>
  );
}