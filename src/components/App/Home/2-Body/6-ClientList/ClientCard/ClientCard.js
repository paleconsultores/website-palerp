//Dependencies
import React from 'react';
import PropTypes from 'prop-types';

//Resources
import DEFAULT_IMAGE from './images/etapoy.jpg';
import './ClientCard.css';

export function ClientCard(
  {
    image = DEFAULT_IMAGE
  }) 
{
  return (
    <div className="ClientCard">
      <img className="image" src={image} alt = "imageClient"></img>
    </div>
  );
}

ClientCard.propTypes = {
  image: PropTypes.string
}