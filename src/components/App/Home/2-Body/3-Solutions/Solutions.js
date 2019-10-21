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
      title: 'Implementación Integral',
      descripcion:'de Hardware y Software',
      imageUrl: image2,
      responsiveimages : imgr3,
      text:"Contamos y trabajamos con tecnología de vanguardia para nuestros sistemas de gestion y nuestros productos tecnológicos."
    },
    {
      type: 1,
      alt: 'Consultoria',
      title: 'Consultoría',
      descripcion:'en soluciones de  software',
      imageUrl: image1,
      responsiveimages : imgr1,
      text:'Brindamos asesoría informática, de manera que se realizar un estudio del sistema de manejo de información de su empresa.'
    },
    {
      type: 1,
      alt: 'Desarrollo de Software',
      title: 'Desarrollo de Software',
      descripcion:'a medida',
      imageUrl: developing,
      responsiveimages : imgr2,
      text:"Desarrollamos software a tu medida, brindamos soluciones a las empresas en distintos rubros."
    },
  ];

  return (
    <section id="Solutions" className="solutions">
      <div className="solutions_title">
        {/* <h1 className="title title--x-medium title--red">Nuestras</h1> */}
        <h1 className="title title--large title--green">SERVICIOS</h1>
      </div>
      <div className="solutions__info">
        {_cardsSolutions.map((solution) =>
          < CardSolutions
            key = {_cardsSolutions.indexOf(solution)}
            type = {solution.type}
            alt = {solution.alt}
            title = {solution.title}
            text = {solution.text}
            descripcion={solution.descripcion}
            imageUrl={solution.imageUrl}
            responsiveimages= {solution.responsiveimages}
          />
        )}
      </div>
    </section>
  );
}