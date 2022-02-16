import React from 'react';
import DestinationCard from './DestinationCard';

const Carousel = ({ destinations }) => {
    console.log(destinations)
    return (
        <>
            <div className='container'>
                {destinations.map(destination => <DestinationCard key={destination._id} {...destination} />)}
            </div>
        </>

    )
}

export default Carousel;