//Dependencies
import React from "react"; 
import PropTypes from "prop-types";

//Resources
import DEFAULT_IMAGE from "./images/consulta.jpg";
import './CardSolutions.css';

export function CardSolutions(
    { 
      type = 1,
      title = 'lorem', 
      imageUrl = DEFAULT_IMAGE,
      alt = "image alternate text", 
    
    }) 
  {
    if (type === 1) {
      return (
        <div className="card-solutions">
  
       <div className="card-solutions__sectionName">
       <img
           className="card-solutions__image"
           src={imageUrl} alt={alt}/>
     
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
    title: PropTypes.string,
    image: PropTypes.string
  }
