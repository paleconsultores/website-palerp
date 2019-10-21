//Dependencies
import React from "react";

//Resources
import { CardSolutions } from "./CardSolutions";

import image1 from './CardSolutions/images/consulta-800.jpg';
import developing from './CardSolutions/images/DesarrolloSoftware-800.jpg';
import image2 from './CardSolutions/images/HardwareySoftware-800.jpg';

import imgr1 from './CardSolutions/images/consulta-400.jpg';
import imgr2 from './CardSolutions/images/DesarrolloSoftware-400.jpg';
import imgr3 from './CardSolutions/images/HardwareySoftware-400.jpg';

import './Solutions.css';

export function Solutions() {
  const _cardsSolutions = [
    {
      type: 1,
      alt: 'Hardware y Software',
      title: 'Hardware y Software',
      imageUrl: image2,
      responsiveimages : imgr3,
      text:"Lorem ipsum dolor sit amet consectetur adipiscing elit malesuada laoreet vitae sociosqu, lobortis ultrices potenti vivamus etiam metus mus lacinia aenean inceptos"
    },
    {
      type: 1,
      alt: 'Consultoria',
      title: 'Consultoría',
      imageUrl: image1,
      responsiveimages : imgr1,
      text:'cubilia non mauris vehicula turpis nascetur ac ultricies leo pellentesque. Blandit vulputate curae dui gravida nec eleifend a hendrerit pretium'
    },
    {
      type: 1,
      alt: 'Desarrollo de Software',
      title: 'Desarrollo de Software',
      imageUrl: developing,
      responsiveimages : imgr2,
      text:"vel cursus class a, inceptos dui imperdiet platea ut lobortis bibendum, cum euismod feugiat tortor justo consequat."
    },
  ];

  return (
    <section id="Solutions" className="solutions">
      <div className="solutions_title">
        <h1 className="title title--x-medium title--red">Nuestras</h1>
        <h1 className="title title--large title--green">Soluciones</h1>
      </div>
      <div className="solutions__info">
        {_cardsSolutions.map((solution) =>
          < CardSolutions
            key = {_cardsSolutions.indexOf(solution)}
            type = {solution.type}
            alt = {solution.alt}
            title = {solution.title}
            text = {solution.text}
            imageUrl={solution.imageUrl}
            responsiveimages= {solution.responsiveimages}
          />
        )}
      </div>
    </section>
  );
}