//Dependencies
import React from "react";
//Resources
import { data } from './CarouselData'
import { CarouselCard } from './CarouselCard/CarouselCard'
import './Carousel.css'

export class Carousel extends React.Component {
    constructor(props) {
        super(props);
        /* properties its to manipulate the Carousel data meanwhile property is 
        for manipulate the length or other carousel data in array form */
        this.state = {
            properties: data.properties,
            property: data.properties[0]
        }
    }
    /*Change to the next prperty card*/
    nextProperty = () => {
        const newIndex = this.state.property.index + 1;
        this.setState({
            property: data.properties[newIndex]
        })
    }
    /*Change to the previus prperty card*/
    prevProperty = () => {
        const newIndex = this.state.property.index - 1;
        this.setState({
            property: data.properties[newIndex]
        })
    }
    /*Automatic change of state for the slidehow*/
    changeProperty = () => {
        var newIndex = this.state.property.index + 1;
        var resetIndex = data.properties.length - 1;
        if (newIndex > resetIndex) {
            newIndex=0
        }
        this.setState({
            property: data.properties[newIndex]
        })
    }
    /*lifecycle what permit do the action when the component render*/
    componentDidMount() {
         this.startCarousel()
    }
    /*Start the carousel and set the time in miliseconds to change the properties*/
    startCarousel = () => {
        setInterval(()=>{
            this.changeProperty()
        },5000)
    }
    render() {
        const { properties, property } = this.state;
        return (
            <section id="Carousel" className="carousel-section" >
                {/*get the index of the item from the carousel data properties*/}
                <div className={`carousel-slider active-slide-${property.index}`}>
                    {/*calculate where in the wrapper is the next card */}
                    <div className="carousel-slider-wrapper" style={{
                        'transform': `translateX(-${property.index*(100/properties.length)}%)`
                        }}>
                        {
                            properties.map(property => <CarouselCard key={property.id} property={property}/>)
                        }
                    </div>
                </div>  
            </section>
        );
    }
}