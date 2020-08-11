//Dependencies
import React, { useState, useEffect } from 'react';
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './HeroEn';
import es from './HeroEs';
//Resources
import  TypedText  from "./TypedText/TypedText";

import redhex from './images/red7.png';
import redhexs from './images/red7s.png';
import './Hero.css';

counterpart.registerTranslations('en',en);
counterpart.registerTranslations('es',es);
counterpart.setLocale('es');
export  default function Hero() {
  // Integer state to make Hexagons rotate
  const [count, setCount] = useState(0);

  // Effect to increase count
  useEffect(function () {
    setTimeout(() => {
      setCount(count + .150);
    }, 10);
  });

  return(
    <section id="Hero"className="hero" >
      <div className="hero__content">
      </div>
      <div className="intro-text">
        <div className="intro-text__container">
          <TypedText /> 

          {/* <p className="intro-text__paragraph">
            Somos una fábrica de software que desarrolla soluciones a medida,
             teniendo como prioridad tu satisfacción.
          </p> */}
          <Translate content="contenido" component="p" className="intro-text__paragraph"/>
       
        </div>
      </div>
      <div className="hero-background">
        <div className="hero-background__overlay">
          <div className="hero__hex-animation">
            <img src={redhexs} alt="Hexagon shadow" style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '600px',
              height: '609px',
              transformOrigin: '50% 50%',
              transform: `rotate(${count}deg)`
            }}/>
            <img src={redhex} alt="Hexagon" style={{
              position: 'relative',
              display: 'block',
              width: '600px',
              height: '609px',
              transformOrigin: '43% 33%',
              transform: `rotate(${count}deg)`
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}