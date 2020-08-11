// Dependencies
import React from 'react';

// Resources
import './styles.css'
import logoPale from '../../../../images/Logo_Pale_Negativo_Imagen.png';
import { faFacebookSquare,faWhatsappSquare, faYoutubeSquare} from "@fortawesome/free-brands-svg-icons";
import { faHome, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from "./FooterEn";
import es from "./FooterEs";

counterpart.registerTranslations('en',en);
counterpart.registerTranslations('es',es);
counterpart.setLocale('es');

export default function Footer() {
  return(
    <div className="section_Footer">
    <footer>
      <div className="footer_info">
        <div>
          <img className="logo_Footer" src={logoPale} alt="logo_footer"></img>
          <hr/>
          {/* <p>Desarrollamos soluciones a tu medida</p> */}
          <Translate content="descripcion" component="p"/>
        </div>
        <div>
          {/* <h2 className="footer_info_subtitulos">Síguenos en:</h2> */}
          <Translate content="subtitulo1" component="h2" className="footer_info_subtitulos"/>
          <div>
            <a target="_blank"  className="social" href="https://www.youtube.com/PaleConsultores">
              <FontAwesomeIcon icon={faYoutubeSquare} size="3x" color="white"/>
            </a>
            <a target="_blank" className="social" href="https://api.whatsapp.com/send?phone=+51984125256&amp;text=Quiero%20saber%20mas%20de%20iFacturacion ">
              <FontAwesomeIcon icon={faWhatsappSquare} size="3x" color="white"/>
            </a>
            <a target="_blank" className="social" href="https://www.facebook.com/pale.consultores">
              <FontAwesomeIcon icon={faFacebookSquare} size="3x" color="white"/>
            </a>
          </div>
        </div>
        <div>
          {/* <h2 className="footer_info_subtitulos">Servicios</h2> */}
          <Translate content="subtitulo2" component="h2" className="footer_info_subtitulos"/>
          <div className="footer_servicios">
            <div>
              {/* <p>Aplicaciones Web</p> */}
              <Translate content="serviciosItems.item1" component="p" />
              {/* <p>Aplicaciones Móviles</p> */}
              <Translate content="serviciosItems.item2" component="p"/>
              {/* <p>Internet de las Cosas</p> */}
              <Translate content="serviciosItems.item3" component="p"/>
            </div>
            <div>
              {/* <p>Consultoría de Software</p> */}
              <Translate content="serviciosItems.item4" component="p"/>
              {/* <p>Facturación electrónica</p> */}
              <Translate content="serviciosItems.item5" component="p"/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr/>
      </div>
      <div className="footer_info">
        <div>
          <h4><FontAwesomeIcon icon={faPhone}/> +51 984-125-256</h4>
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
    </div>
  );
}