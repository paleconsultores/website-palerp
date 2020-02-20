//Dependencies
import React from "react";

//Resources
import  CardSolutions  from "./CardSolutions/CardSolutions";

import image1 from './CardSolutions/images/consulta-800.jpg';
import developing from './CardSolutions/images/DesarrolloSoftware-800.jpg';
import image2 from './CardSolutions/images/HardwareySoftware-800.jpg';

import imgr1 from './CardSolutions/images/consulta-400.jpg';
import imgr2 from './CardSolutions/images/DesarrolloSoftware-400.jpg';
import imgr3 from './CardSolutions/images/HardwareySoftware-400.jpg';

import './Solutions.css';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './SolutionEn';
import es from './SolutionEs';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('es', es);
counterpart.setLocale('es');

export default function Solutions() {
  const _cardsSolutions = [
    {
      type: 1,
      alt: <Translate content="items1.alt"/>,
      title: <Translate content="items1.title" component="p"/>,
      descripcion:<Translate content="items1.descripcion" component="span"/>,
      imageUrl: image2,
      responsiveimages : imgr3,
      text:<Translate content="items1.text" />
    },
    {
      type: 1,
      alt: <Translate content="items2.alt" />,
      title:  <Translate content="items2.title" component="p"/>,
      descripcion: <Translate content="items2.descripcion" component="span" />,
      imageUrl: image1,
      responsiveimages : imgr1,
      text: <Translate content="items2.text" />
    },
    {
      type: 1,
      alt: <Translate content="items3.alt" />,
      title: <Translate content="items3.title" component="p"/>,
      descripcion:<Translate content="items3.descripcion" component="span"/>,
      imageUrl: developing,
      responsiveimages : imgr2,
      text:<Translate content="items3.text"/>
    },
  ];

  return (
    <section id="Solutions" className="solutions">
      <div className="solutions_title">
        {/* <h1 className="title title--x-medium title--red">Nuestras</h1> */}
        {/* <h1 className="title title--large title--green">SERVICIOS</h1> */}
        <Translate content="titleSolution" component="h1" className="title title--large title--green"/>
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