//Dependencies
import React from "react"; 
import PropTypes from "prop-types";

//Resources
import DEFAULT_IMAGE from "../images/ayuda.jpg";
import './Image.css';

export function Image(
    {
        type=1,
        imageUrl=DEFAULT_IMAGE,
        alt = "image alternate text", 
    }
)
    {
    if(type===1){
        return(
            <div className="image">

            <img
                className="image__image"
                src={imageUrl} alt={alt}/>
                  
          </div>

            );
        }
    }
    Image.propTypes = {
        type: PropTypes.number,
        serviceClass: PropTypes.string,
        image: PropTypes.string
      }