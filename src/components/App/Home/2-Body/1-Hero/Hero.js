//Dependencies
import React, { useState, useEffect } from 'react';

//Resources
import redhex from './images/red7.webp';
import redhexs from './images/red7s.webp';
import './Hero.css';

export function Hero() {
  var [count, setCount] = useState(0);

  useEffect(function () {
    setTimeout(() => {
      setCount(count + .150);
    }, 10);
  });
  
  return(
    <section className="hero" >
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
      <div className="hero-image"/>
    </section>
  );
}