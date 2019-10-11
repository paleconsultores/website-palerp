//Dependencies
import React from "react"; 
import PropTypes from "prop-types";

//Resources

import './CardInformation.css'

export function CardInformation(
    {
        type=1,
        title="lorem",
        descripcion=" descripcion del titulo",
    }
)
{
    if(type===1){
        return(
            <div className="card-information">
                <h1>{title}</h1>
                <p>{descripcion}</p>
            </div>
        );
    }
}

CardInformation.propTypes = {
    type: PropTypes.number,
    serviceClass: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    descripcion:PropTypes.string
  }
