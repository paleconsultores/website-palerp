//Dependencies
import React from "react";

//Resources
import { CardService } from "./CardService";
import capacitacion from "./CardService/images/capacitaciones.png";
import soporte from "./CardService/images/soporteHardware.jpg";
import desarrollo from "./CardService/images/Entornodigital.jpg";
import ventas from "./CardService/images/ventas.png";
import './Services.css';

export function Services() {
  const _cards = [
    {
      type: 1,
      alt: 'training',
      title: 'Capacitaciones',
      description: 'Brindamos capacitaciones, para que se familiaricen con nuestro servicio, absorviendo sus dudas',
      imageUrl:capacitacion
    },
    {
      type: 2,
      alt: 'devTeam',
      title: 'Equipo de desarrollo',
      description: 'Contamos y trabajamos con tecnología de vanguardia para nuestros sistemas de gestión y nuestros productos tecnológicos',
      imageUrl:desarrollo
    },
    {
      type: 1,
      alt: 'support',
      title: 'Soporte',
      description: 'Resolvemos tus dudas, brindandote soporte 15/6, con respuestas inmediatas y tu operacion este asegurada',
      imageUrl:soporte
    },
    {
      type: 2,
      alt: 'sales',
      title: 'Ventas',
      description: 'Resolvemos tus dudas, brindandote soporte 15/6, con respuestas inmediatas y tu operacion este asegurada',
      imageUrl:ventas
    }
  ]

  return (
    <section id="Services" className="services">
      <div className="services__title">
        <h1 className="title title--medium title--green">Mundo</h1>
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
          >{card.description}</CardService>
        )}
      </div>
    </section>
  );
}