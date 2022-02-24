import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ city, _id }) => {
    return (
        <div className="destination-card">
            <Link to={`/destination/${_id}`}>
                <img src={city[0].image} alt={city[0].cityName} />
                <h3>City: {city[0].cityName}</h3>
                <h3>Language: {city[0].language}</h3>
            </Link>
        </div>
    );
}
export default DestinationCard;