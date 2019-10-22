//Dependencies
import React, { useState, useEffect } from 'react';

//Resources
import { TypedText } from "./TypedText";

import redhex from './images/red7.png';
import redhexs from './images/red7s.png';
import './Hero.css';

export function Hero() {
  const [count, setCount] = useState(0);

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
          <p className="intro-text__paragraph">Somos una fábrica de software que desarrolla soluciones a medida, teniendo como prioridad la satisfacción del usuario final.</p>
       
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