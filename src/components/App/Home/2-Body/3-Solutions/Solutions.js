//Dependencies
import React from "react";

//Resources
import { CardSolutions } from "./CardSolutions";
import image1 from './CardSolutions/images/consulta.jpg';
import developing from './CardSolutions/images/DesarrolloSoftware.png';
import image2 from './CardSolutions/images/HardwareySoftware.png';
import './Solutions.css';


export function Solutions() {
  const _cardsSolutions = [
    {
      type: 1,
      alt: 'Hardware y Software',
      title: 'Hardware y Software',
      imageUrl: image2,
    },
    {
      type: 1,
      alt: 'Consultoria',
      title: 'Consultoría',
      imageUrl: image1,
    },
    {
      type: 1,
      alt: 'Desarrollo de Software',
      title: 'Desarrollo de Software',
      imageUrl: developing,
    },
  ];

  return (
    <section className="solutions">
      <div>
        <h1 className="title title--medium title--red">Nuestras</h1>
        <h1 className="title title--large title--green">Soluciones</h1>
      </div>
      <div className="solutions__info">
        {_cardsSolutions.map((solution) =>
          < CardSolutions
            key = {_cardsSolutions.indexOf(solution)}
            type = {solution.type}
            alt = {solution.alt}
            title = {solution.title}
            imageUrl={solution.imageUrl}
          />
        )}
      </div>
    </section>
  );
}