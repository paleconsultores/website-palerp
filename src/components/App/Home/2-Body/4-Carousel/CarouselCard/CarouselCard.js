//Dependecies
import React from 'react'
import PropTypes from 'prop-types'
//Resources
import './CarouselCard.css'

export function CarouselCard ({property}) {
    const {index, picture, title, text , responsivepicture} = property;
    return (
        <div id={`card-${index}`} className="carousel-card">
            <picture className="carousel-picture">
                <source media="(max-width: 420px)" srcSet={responsivepicture}></source>
                <img className="carousel-card__image" src={picture} alt="imageCarousel"/>
            </picture>
            <div className="carousel-card__text">
                <h1>{title}</h1>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}
CarouselCard.propTypes = {
    property: PropTypes.object.isRequired
}