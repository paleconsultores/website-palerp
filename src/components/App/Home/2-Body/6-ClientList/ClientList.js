//Dependencies
import React from 'react';
import { ClientCard } from './ClientCard';

// Resources
import './ClientList.css';
import image1 from './ClientCard/images/etapoy-150x150.jpg';
import image2 from './ClientCard/images/grifo-el-imperio-full-150x150.jpg';
import image3 from './ClientCard/images/grifo-gabriel-150x150.jpg';
import image4 from './ClientCard/images/grifo-malaga-150x150.jpg';
import image5 from './ClientCard/images/grifo-manu-150x150.jpg';
import image6 from './ClientCard/images/pale-consultores-150x150.jpg';
import image7 from './ClientCard/images/distribuciones-san-andres-150x150.jpg';
import image8 from './ClientCard/images/grifo-colcamayo-150x150.jpg';
import image9 from './ClientCard/images/grifo-virgen-natividad-150x150.jpg';


export function ClientList() {
  const _cardsImages= [
    {
      
      image: image1,
    },
    {
      
      image: image2,
    },
    {
      
      image: image3,
    },
    {
      
      image: image4,
    },
    {
      
      image: image5,
    },
    {
      
      image: image6,
    },
    {
      
      image: image7,
    },
    {
      
      image: image8,
    },
    {
      
      image: image9,
    },

  ];
  return (
    <section className="client-list">
      <div className="client-list__title">
        <p className="title title--large title--green">Nuestros casos de éxito</p>
      </div>
      <div className="client-list-cards">
        {/* {
          [1, 2, 3, 4, 5].map(item => <ClientCard key={item}/>)
        } */}

          {_cardsImages.map((imagen) =>
              < ClientCard
              key = {_cardsImages.indexOf(imagen)}
              image={imagen.image}
              
            />
            )}    

         
      </div>
    </section>
  );
};