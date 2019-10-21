//Dependecies
import React from 'react'
import PropTypes from 'prop-types'
//Resources
import './CarouselCard.css'

export function CarouselCard ({property}) {
    const {index, picture, title, text , responsivepicture,d1,d2,d3,d4,d5} = property;
    return (
        <div id={`card-${index}`} className="carousel-card">
            <picture className="carousel-picture">
                <source media="(max-width: 420px)" srcSet={responsivepicture}></source>
                <img className="carousel-card__image" src={picture} alt="imageCarousel"/>
            </picture>
            <div className="carousel-card__text">
                <h1 className="carousel-card__text-tittle">{title}</h1>
                <p className="carousel-card__text-text">
                    {text}
                </p>
                <ul >
                    <li>{d1}</li>
                    <li>{d2}</li>
                    <li>{d3}</li>
                    <li>{d4}</li>
                    <li>{d5}</li>
                </ul>
            </div>
        </div>
    )
}
CarouselCard.propTypes = {
    property: PropTypes.object.isRequired
}