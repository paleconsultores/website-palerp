//Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Resources
import DEFAULT_IMAGE from './images/etapoy-150x150.webp';
import './ClientCard.css';

export function ClientCard(
  {
    image = DEFAULT_IMAGE,
    alt = "default alt"
  }) 
{
  return (
    <div className="ClientCard">
      <img className="image" src={image} alt={alt}></img>
    </div>
  );
}

ClientCard.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string
}