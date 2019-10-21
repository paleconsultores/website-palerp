//Dependencies
import React from "react";

//Resources
import { CardService } from "./CardService";
import capacitacion from "./CardService/images/capacitaciones-800.jpg";
import soporte from "./CardService/images/soporteHardware-800.jpg";
import desarrollo from "./CardService/images/Entornodigital-800.jpg";
import ventas from "./CardService/images/ventas-800.jpg";

import capacitacionresp from "./CardService/images/capacitaciones-400.jpg";
import soporteresp from "./CardService/images/soporteHardware-400.jpg";
import desarrolloresp from "./CardService/images/Entornodigital-400.jpg";
import ventasresp from "./CardService/images/ventas-400.jpg";


import './Services.css';

export function Services() {
  const _cards = [
    {
      type: 1,
      alt: 'training',
      title: 'Capacitaciones',
      description: 'Brindamos capacitaciones, para que se familiaricen con nuestro servicio, absorviendo sus dudas',
      imageUrl:capacitacion,
      responsiveImages:capacitacionresp
    },
    {
      type: 2,
      alt: 'devTeam',
      title: 'Equipo de desarrollo',
      description: 'Contamos y trabajamos con tecnología de vanguardia para nuestros sistemas de gestión y nuestros productos tecnológicos',
      imageUrl:desarrollo,
      responsiveImages:desarrolloresp
    },
    {
      type: 1,
      alt: 'support',
      title: 'Soporte',
      description: 'Resolvemos tus dudas, brindandote soporte 15/6h, con respuestas inmediatas y tu operación este asegurada',
      imageUrl:soporte,
      responsiveImages:soporteresp
    },
    {
      type: 2,
      alt: 'sales',
      title: 'Ventas',
      description: 'Nos encargamos de brindarte información de los sistemas que la empresa ofrece,nuestro equipo de ventas realiza visita a los clientes interesados,llevando demos de nuestros productos y servicios,para que el cliente tenga una mejor experiencia de usuario.',
      imageUrl:ventas,
      responsiveImages:ventasresp
    }
  ]

  return (
    <section id="Services" className="services">
      <div className="services__title">
        <h1 className="title title--x-medium title--green">Mundo</h1>
        <h1 className="title title--large title--red">Palerp</h1>
      </div>
      <div className="services__info">
        {_cards.map((card) => 
          <CardService
            key = {_cards.indexOf(card)}
            type = {card.type}
            alt = {card.alt}
            title = {card.title}
            imageUrl = {card.imageUrl}
            responsiveImages={card.responsiveImages}
          >{card.description}</CardService>
        )}
      </div>
    </section>
  );
}