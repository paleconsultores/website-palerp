// Dependencies
import React from "react";

// Resources
import LineaTiempo from "./images/Linea-de-tiempo.png";

import './AboutUs.css';
import MessageSecond from "../9-MessageSecond/MessageSecond";
import EventCard from "./EventCard/EventCard";

export default function AboutUs() {
  return(
    <section id="AboutUs" className="about-us">
      <div className="about-us__header">
        <h1 className="title title--large title--green">Nosotros</h1>
      </div>
      <div className="timeline">
        <img className="timeline__image" src={LineaTiempo} />
      </div>
      <div className="events">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </section>
  );
}