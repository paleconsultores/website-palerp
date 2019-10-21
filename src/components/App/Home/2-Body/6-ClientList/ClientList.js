//Dependencies
import React from 'react';
import { ClientCard } from './ClientCard';

// Resources
import './ClientList.css';
import image1 from './ClientCard/images/etapoy-150x150.jpg';
import image3 from './ClientCard/images/grifo-gabriel-150x150.jpg';
import image4 from './ClientCard/images/grifo-malaga-150x150.jpg';
import image5 from './ClientCard/images/grifo-manu-150x150.jpg';
import image7 from './ClientCard/images/distribuciones-san-andres-150x150.jpg';
import image8 from './ClientCard/images/grifo-colcamayo-150x150.jpg';
import image9 from './ClientCard/images/grifo-virgen-natividad-150x150.jpg';
import image12 from './ClientCard/images/servicentro-pavel-dark-150x150.jpg';

export function ClientList() {
  const _cardsImages= [
    {
      alt: "Etapoy",
      image: image1,
    },
    {
      alt: "Grifo Gabriel",
      image: image3,
    },
    {
      alt: "Grifo Malaga",
      image: image4,
    },
    {
      alt: "Grifo Manu",
      image: image5,
    },
   
    {
      alt: "Distribuciones San Andres",
      image: image7,
    },
    {
      alt: "Grifo Cocalmayo",
      image: image8,
    },
    {
      alt: "Grifo Virgen Natividad",
      image: image9,
    },

    {
      alt: "Servicentro Pavel",
      image: image12,
    },
  ];
  return (
    <section id="ClientList" className="client-list">
      <div className="client-list__title">
        <p className="title title--large title--green">Nuestros casos de éxito</p>
      </div>
      <div className="client-list-cards">

        {_cardsImages.map((card) =>
          < ClientCard
            key = {_cardsImages.indexOf(card)}
            image={card.image}
            alt={card.alt}
          />
        )}

      </div>
    </section>
  );
};