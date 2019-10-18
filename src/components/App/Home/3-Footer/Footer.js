// Dependencias
import React from 'react';

//Recursos
import './styles.css'
import logoPale from '../../../../images/Logo_Pale_Negativo_Imagen.webp';
import { faFacebookSquare,faWhatsappSquare, faYoutubeSquare} from "@fortawesome/free-brands-svg-icons";
import { faHome, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
export const Footer = () => {
  return(
    <footer>

      <div className="footer_info">
        <div>
          <img className="logo_Footer" src={logoPale} alt="logo_footer"></img>
          <hr/>
          <p>Desarrollamos soluciones a tu medida</p>
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

        <div>
            <h5>Servicios</h5>
              <div className="footer_servicios">
                  <div>
                      <p>Aplicaciones Web</p>
                      <p>Aplicaciones Móviles</p>
                      <p>Internet de las Cosas</p>
                  </div>
                  <div>
                        <p>Consultoría de Software</p>
                        <p>Facturación electrónica</p>   
                  </div>
               </div>
        </div>
      </div>

      <div>
         <hr/>
      </div>
      

      <div className="footer_info">
          <div>
            <h4><FontAwesomeIcon icon={faPhone}/> 984-125-256</h4>
            <p>9:00 AM - 6:00 PM</p>
          </div>
          <div>
            <h4><FontAwesomeIcon icon={faMailBulk}/> Info@palerp.com</h4>
            <p>Consultas On-line</p>
          </div>

          <div>
              <h4><FontAwesomeIcon icon={faHome}/> Urb.Marcavalle E-20,Wanchaq</h4>
              <p>Cusco-Perú</p>
          </div>
      </div>

      <div className="copyrigth">
        <p>Copyright © 2019Palerp</p>
      </div>
     
    </footer>
  );
}