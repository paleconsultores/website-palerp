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
        <img className="image-hex image-hex--shadow" src={redhexs} alt="Hexagon shadow" style={{transform: `rotate(${count}deg)`}}/>
        <img className="image-hex" src={redhex} alt="Hexagon" style={{transform: `rotate(${count}deg)`}} />
      </div>
      <div className="hero-image"></div>
    </section>
  );
}