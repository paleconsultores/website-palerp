// Dependencias
import React from 'react';

//Recursos
import './styles.css'
import logoPale from '../../../../images/Logo_Pale_Negativo_Imagen.png';

export const Footer = () => {
  return(
    <footer>
      <div className="info">
        <img className="logoFooter" src={logoPale}></img>
        <h5>Urb.Marcavalle E-15,Cusco-Cusco</h5>
        <h5>Info@palerp.com</h5>
        <h5>984-125-256</h5>
      </div>
      <div className="copyrigth">
        <h1>Copyright © 2019 Pale Consultores</h1>
      </div>
      <div></div>
    </footer>
  );
}