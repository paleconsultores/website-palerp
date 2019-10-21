//Dependencies
import React from "react"; 
import PropTypes from "prop-types";

//Resources
import DEFAULT_IMAGE from "./images/consulta-800.jpg";
import DEFAULT_IMAGE_RESP from "./images/consulta-400.jpg"
import './CardSolutions.css';

export function CardSolutions(
    { 
      type = 1,
      title = 'lorem', 
      imageUrl = DEFAULT_IMAGE,
      responsiveimages = DEFAULT_IMAGE_RESP,
      text = "ipsum",
      alt = "image alternate text", 
    }) 
  {
    if (type === 1) {
      return (
      <div className="card-solutions">
       <div className="card-solutions__sectionName">
        <picture>
          <source media="(max-width: 420px)" srcSet={responsiveimages}/>
          <img
          className="card-solutions__image"
          src={imageUrl} alt={alt}/>
        </picture>
     
       </div>
        <div className = "card-solutions__text-hover">
          <div >{text}</div>
        </div>
       

       <div className="card-solutions__seccionInfo">
             <h2>{title}</h2>
             
       </div>

       <div className="card-solutions__seccionFooter">
           <button className="sizeButton">Saber mas</button>
       </div>
      </div>
      );
    }
  }
  
  CardSolutions.propTypes = {
    type: PropTypes.number,
    serviceClass: PropTypes.string,
    text : PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    imagerespURL: PropTypes.string
  }
