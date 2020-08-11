//Dependencies
import React from "react";

//Resources
import  CardService  from "./CardService/CardService";
import capacitacion from "./CardService/images/capacitaciones-800.jpg";
import soporte from "./CardService/images/soporte-800.png";
import desarrollo from "./CardService/images/desarrollo1-800.png";
import ventas from "./CardService/images/ventas-800.jpg";

import capacitacionresp from "./CardService/images/capacitaciones-400.jpg";
import soporteresp from "./CardService/images/soporte-400.png";
import desarrolloresp from "./CardService/images/desarrollo1-400.png";
import ventasresp from "./CardService/images/ventas-400.jpg";


import './Services.css';

import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './ServiEn';
import es from './ServiEs';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('es', es);
counterpart.setLocale('es');

export default function Services() {
  const _cards = [
    {
      type: 1,
      alt: 'training',
      title: <Translate content="itemServico1.title" />,
      description: <Translate content="itemServico1.description" />,
      imageUrl:capacitacion,
      responsiveImages:capacitacionresp
    },
    {
      type: 2,
      alt: 'devTeam',
      title: <Translate content="itemServico2.title" />,
      description: <Translate content="itemServico2.description" />,
      imageUrl:desarrollo,
      responsiveImages:desarrolloresp
    },
    {
      type: 1,
      alt: 'support',
      title: <Translate content="itemServico3.title" />,
      description:<Translate content="itemServico3.description" />,
      imageUrl:soporte,
      responsiveImages:soporteresp
    },
    {
      type: 2,
      alt: 'sales',
      title: <Translate content="itemServico4.title" />,
      description: <Translate content="itemServico4.description" />,
      imageUrl:ventas,
      responsiveImages:ventasresp
    }
  ]

  return (
    <section id="Services" className="services">
      <div className="services__title">
        {/* <h1 className="title title--x-medium title--green">Mundo</h1> */}
        <Translate content="titleServicio" component="h1" className="title title--x-medium title--green"/>
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