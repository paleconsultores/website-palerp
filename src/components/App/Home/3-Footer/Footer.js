// Dependencias
import React from 'react';

//Recursos
import './styles.css'
import logoPale from '../../../../images/Logo_Pale_Negativo_Imagen.png';

export const Footer = () => {
  return(
    <footer>
      <div className="info">
        <img className="logoFooter" src={logoPale} alt="logoFooter"></img>
        <h5>Urb. Marcavalle E-20, Wanchaq - Cusco</h5>
        <h5>Info@palerp.com</h5>
        <h5>983-125-256</h5>
      </div>
      <div>
        <h1>2019 PALERP</h1>
      </div>
      <div></div>
    </footer>
  );
}