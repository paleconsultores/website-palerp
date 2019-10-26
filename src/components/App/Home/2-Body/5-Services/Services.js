//Dependencies
import React from "react";

//Resources
import { CardService } from "./CardService";
import capacitacion from "./CardService/images/capacitaciones-800.jpg";
import soporte from "./CardService/images/soporte-800.png";
import desarrollo from "./CardService/images/desarrollo1-800.png";
import ventas from "./CardService/images/ventas-800.jpg";

import capacitacionresp from "./CardService/images/capacitaciones-400.jpg";
import soporteresp from "./CardService/images/soporte-400.png";
import desarrolloresp from "./CardService/images/desarrollo1-400.png";
import ventasresp from "./CardService/images/ventas-400.jpg";


import './Services.css';

export function Services() {
  const _cards = [
    {
      type: 1,
      alt: 'training',
      title: 'Capacitaciones',
      description: 'A traves de una atención personalizada y el material adecuado, te enseñamos como usar nuestros productos.',
      imageUrl:capacitacion,
      responsiveImages:capacitacionresp
    },
    {
      type: 2,
      alt: 'devTeam',
      title: 'Equipo de desarrollo',
      description: 'Contamos con la experiencia y capacidad para desarrollar, y entregar aplicaciones de software con tecnología de vanguardia.',
      imageUrl:desarrollo,
      responsiveImages:desarrolloresp
    },
    {
      type: 1,
      alt: 'support',
      title: 'Soporte',
      description: 'Resolvemos los problemas que surgan, así como tus dudas, brindandote respuestas inmediatas para que tu operación este asegurada.',
      imageUrl:soporte,
      responsiveImages:soporteresp
    },
    {
      type: 2,
      alt: 'sales',
      title: 'Ventas',
      description: 'Nuestro equipo de ventas te brindará la información que necesites acerca de nuestros productos y servicios. te hará visitas y demostraciones para que tomes la mejor decisión.',
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