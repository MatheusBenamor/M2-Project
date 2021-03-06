import React, { useState, useEffect } from 'react';
import { Carousel as CarouselBS } from 'react-bootstrap'
import "../components/Carousel.css";
// import AllCities from '../pages/AllCities';


const Carousel = ({ destinations }) => {

    const [index, setIndex] = useState(0);
    const [cities, setCities] = useState([]);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    const MathDestinations = () => {
        const cities = destinations.map((destination) => destination.city);

        const newArray = [];
        for (let i = 0; i < cities.length; i++) {
            for (let j = 0; j < cities[i].length; j++) {
                newArray.push(cities[i][j])
            }
        }
        setCities(newArray)
    }

    useEffect(() => {
        MathDestinations()
        console.log(cities)
    }, [destinations])

    return (
    <section className='page-container'>
        <CarouselBS activeIndex={index} onSelect={handleSelect}>
            {destinations.map(destination => (
              
                <CarouselBS.Item key={destination._id}>
                  <div className='img-size'>
                    <img
                        className="d-block w-100"
                        src={destination.city[0].image}
                        alt={destination.city[0].cityName}
                    />
                    </div>
                    <CarouselBS.Caption>
                        <div className="text-color">
                        <h3>{destination.city[0].cityName}</h3>
                        </div>
                        
                    </CarouselBS.Caption>
                </CarouselBS.Item>
                
            ))}

        </CarouselBS>
        </section>
    );
}

export default Carousel;