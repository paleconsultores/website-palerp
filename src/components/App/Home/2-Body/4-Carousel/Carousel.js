//Dependecies
import React from "react";
//Resources
import { data } from './CarouselData'
import { CarouselCard } from './CarouselCard/CarouselCard'
import './Carousel.css'

export class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0]
        }
    }
    nextProperty = () => {
        const newIndex = this.state.property.index + 1;
        this.setState({
            property: data.properties[newIndex]
        })
    }
    prevProperty = () => {
        const newIndex = this.state.property.index - 1;
        this.setState({
            property: data.properties[newIndex]
        })
    }
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
    componentDidMount() {
         this.startCarousel()
    }
    startCarousel = () => {
        setInterval(()=>{
            this.changeProperty()
        },3000)
    }
    render() {
        const { properties, property } = this.state;
        return (
            <section className="carousel-section" >
                <div className={`carousel-slider active-slide-${property.index}`}>
                    <div className="carousel-slider-wrapper" style={{
                  'transform': `translateX(-${property.index*(100/properties.length)}%)`
                        }}>
                        {
                            properties.map(property => <CarouselCard key={property._id} property={property} />)
                        }
                    </div>  
                </div>
            </section>
        );
    }
}