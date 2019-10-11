//Dependencies
import React from "react";

//Resources

import { CardSolutions } from "./CardSolutions";
import './Solutions.css';
import image1 from './CardSolutions/images/consulta.jpg';
import developing from './CardSolutions/images/DesarrolloSoftware.png';
import image2 from './CardSolutions/images/HardwareySoftware.png';


export function Solutions() {
    const _cardsSolutions = [
        {
        type: 1,
        alt: 'Harware y Software',
        title: 'Harware y Software',
        imageUrl:image2,
        },

        {
        type: 1,
        alt: 'Consultoria',
        title: 'Consultoría',
        imageUrl:image1,
       
         },
      
        {
            type: 1,
            alt: 'Desarrollo de Software',
            title: 'Desarrollo de Software',
            imageUrl:developing,
        },
      
    ]
  
    return (
      <section className="solutions">
        <div>
          <h1 className="title title--medium title--red">Nuestras</h1>
          <h1 className="title title--large title--green">Soluciones</h1>
        </div>
        <div className="solutions__info">
          {_cardsSolutions.map((solutions) => 
            < CardSolutions
              type = {solutions.type}
              alt = {solutions.alt}
              title = {solutions.title}
              imageUrl={solutions.imageUrl}
           />
          )}
        </div>
      </section>
    );
  }