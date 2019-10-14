//Dependencies
import React from "react";

//Resources
import { CardService } from "./CardService";
import './Services.css';

export function Services() {
  const _cards = [
    {
      type: 1,
      alt: 'training',
      title: 'Capacitaciones',
      description: 'Brindamos capacitaciones, para que se familiaricen con nuestro servicio, absorviendo sus dudas'
    },
    {
      type: 2,
      alt: 'devTeam',
      title: 'Equipo de desarrollo',
      description: 'Contamos y trabajamos con tecnología de vanguardia para nuestros sistemas de gestión y nuestros productos tecnológicos'
    },
    {
      type: 1,
      alt: 'support',
      title: 'Soporte',
      description: 'Resolvemos tus dudas, brindandote soporte 15/6, con respuestas inmediatas y tu operacion este asegurada'
    },
    {
      type: 2,
      alt: 'sales',
      title: 'Ventas',
      description: 'Resolvemos tus dudas, brindandote soporte 15/6, con respuestas inmediatas y tu operacion este asegurada'
    }
  ]

  return (
    <section className="services">
      <div>
        <h1 className="title title--medium title--green">Mundo</h1>
        <h1 className="title title--large title--red">Palerp</h1>
      </div>
      <div className="services__info">
        {_cards.map((card) => 
          <CardService
            type = {card.type}
            alt = {card.alt}
            title = {card.title}
          >{card.description}</CardService>
        )}
      </div>
    </section>
  );
}