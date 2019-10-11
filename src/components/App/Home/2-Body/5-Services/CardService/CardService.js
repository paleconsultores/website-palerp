//Dependencies
import React from "react"; 
import PropTypes from "prop-types";

//Resources
import DEFAULT_IMAGE from "./images/ayuda.jpg";
import './CardService.css';

export function CardService(
  { 
    type = 1,
    title = 'lorem', 
    imageUrl = DEFAULT_IMAGE,
    alt = "image alternate text", 
    children = 'lorem ipsum'
  }) 
{
  if (type === 1) {
    return (
      <div className="card-service">
        <h1 className="title title--small title--gray">{title}</h1>
        <p className="card-service__description">{children}</p>
        <img className="card-service__image" src={imageUrl} alt={alt}/>
      </div>
    );
  } else {
    return (
      <div className="card-service">
        <img className="card-service__image" src={imageUrl} alt={alt}/>
        <h1 className="title title--small title--gray">{title}</h1>
        <p className="card-service__description">{children}</p>
      </div>
    );
  }
}

CardService.propTypes = {
  type: PropTypes.number,
  serviceClass: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.string
}