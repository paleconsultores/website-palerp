//Dependencies
import React, {useState,useEffect} from "react";
//Resources
import { data } from './CarouselData'
import { CarouselCard } from './CarouselCard/CarouselCard'
import './Carousel.css'
import {MessageSecond} from "../9-MessageSecond";

export function Carousel(){
  /*Change to the next property card*/
  const [properties]=useState(data.properties)
  const [property,setProperty]=useState(data.properties[0])
  
  /*Automatic change of state for the slidehow*/
  function changeProperty (){
    var newIndex = property.index + 1;
    var resetIndex = data.properties.length - 1;

    if (newIndex > resetIndex) {
      newIndex=0
    }
    setProperty(properties[newIndex])
    
  }
  useEffect(()=>{
    setTimeout(() => {
      changeProperty()
    }, 5000);
  });
    return (
      <section id="Carousel" className="carousel" >
        <MessageSecond>Productos</MessageSecond>
        <div className="carousel__slider">
          {/*get the index of the item from the carousel data properties*/}
          <div className={`carousel-slider active-slide-${property.index}`}>
            {/*calculate where in the wrapper is the next card */}
            <div className="carousel-slider-wrapper" style={{
              'transform': `translateX(-${property.index*(100/properties.length)}%)`
            }}>
              {
                properties.map(property => <CarouselCard key={property.id} property={property}/>)
              }
            </div>
          </div>
        </div>
      </section>
    );
}