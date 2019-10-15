//Dependencies
import React from 'react';

//Resources
import redhex from './images/red7.webp';
import redhexs from './images/red7s.webp';
import './Hero.css';

export function Hero() {
  return(
    <section className="hero" >
      <div className="hero__hex-animation">
        <img className="image-hex image-hex--shadow" src={redhexs} alt="Hexagon shadow" />
        <img className="image-hex" src={redhex} alt="Hexagon" />
      </div>
      <div className="hero-image"></div>
    </section>
  );
}