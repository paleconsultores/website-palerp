//Dependencies
import React from "react"; 
import PropTypes from "prop-types";

//Resources
import DEFAULT_IMAGE from "./images/ayuda-800.jpg";
import DEFAULT_RESP_URL from "./images/ayuda-400.jpg";
import './CardService.css';

export function CardService(
  { 
    type = 1,
    title = 'lorem', 
    imageUrl = DEFAULT_IMAGE,
    responsiveImages = DEFAULT_RESP_URL,
    alt = "image alternate text", 
    children = 'lorem ipsum'
  }) 
{
  if (type === 1) {
    return (
      <div className="card-service">
        <h1 className="title title--small title--gray">{title}</h1>
        <p className="card-service__description">{children}</p>
        <picture>
          <source media="(max-width: 420px)" srcSet={responsiveImages}/>
          <img className="card-service__image" src={imageUrl} alt={alt}/>
        </picture>
      </div>
    );
  } else {
    return (
      <div className="card-service">
        <picture>
          <source media="(max-width: 420px)" srcSet={responsiveImages}/>
          <img className="card-service__image" src={imageUrl} alt={alt}/>
        </picture>
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
  children: PropTypes.string,
  responsiveImages: PropTypes.string
}