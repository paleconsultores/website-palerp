//Dependencies
import React from "react"; 
import PropTypes from "prop-types";

//Resources
import DEFAULT_IMAGE from "../images/informacion-800.jpg";
import Responsive_Image from "../images/informacion-400.jpg"
import './Image.css';

export  default function Image(
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
                <picture>
                    <source media="(max-width: 420px)" srcSet={Responsive_Image}></source>
                    <img
                    className="image__image"
                    alt={alt}
                    src={imageUrl}/>
                </picture>
            
            </div>
            );
        }
    }
    Image.propTypes = {
        type: PropTypes.number,
        serviceClass: PropTypes.string,
        image: PropTypes.string
      }