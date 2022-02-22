import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './DestinationCard.css';
import { Carousel as CarouselBS } from 'react-bootstrap'

const DestinationCard = ({ destinations, city, name, _id }) => {
    // console.log(city)
    // Criar random
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="destination-card">
            {/* <Link to={`/destination/${_id}`}>
                <img src={city[0].image} alt={city[0].cityName} />
                <h3>City: {city[0].cityName}</h3>
                <h3>Language: {city[0].language}</h3>
            </Link> */}
            <CarouselBS activeIndex={index} onSelect={handleSelect}>
                {destinations.map(destination => (

                    <CarouselBS.Item key={destination._id}>
                        <img
                            className="d-block w-100"
                            src={city[0].image}
                            alt={city[0].cityName}
                        />
                        <CarouselBS.Caption>
                            <h3>{city[0].cityName}</h3>
                        </CarouselBS.Caption>
                    </CarouselBS.Item>
                ))}

            </CarouselBS>
        </div>
    );
}
export default DestinationCard;