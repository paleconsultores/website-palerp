// Dependencias
import React from 'react';

//Recursos
import './styles.css'
import logoPale from '../../../../images/Logo_Pale_Negativo_Imagen.png';
import { faFacebookSquare,faYoutube,faWhatsappSquare, faYoutubeSquare} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return(
    <footer>

      <div className="footer_info">
        <div>
          <img className="logo_Footer" src={logoPale}></img>
        </div>
        <div>
          <h5>Urb.Marcavalle E-15,Cusco-Cusco</h5>
          <h5>Info@palerp.com</h5>
          <h5>984-125-256</h5>
        </div>
        <div>
          <h5>Siguenos en:</h5>
            <div>

              <a  className="social" href="https://www.youtube.com/PaleConsultores">
                <FontAwesomeIcon icon={faYoutubeSquare} size="3x" color="white"/>
              </a> 
              <a  className="social" href="https://api.whatsapp.com/send?phone=+51984125256&amp;text=Quiero%20saber%20mas%20de%20iFacturacion ">
                <FontAwesomeIcon icon={faWhatsappSquare} size="3x" color="white"/>
              </a>
                      
              <a  className="social" href="https://www.facebook.com/pale.consultores">
              <FontAwesomeIcon icon={faFacebookSquare} size="3x" color="white"/>
              </a>
            </div>
        </div>
      </div>
      <div className="copyrigth">
        <h1>Copyright © 2019 Pale Consultores</h1>
      </div>
      <div></div>
    </footer>
  );
}