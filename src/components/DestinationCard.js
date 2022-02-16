import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationCard.css';

const DestinationCard = ({ city, name, _id }) => {
    // console.log(city)
    // Criar random
    return (
        <div className="destination-card">
            <Link to={`/destination/${_id}`}>
                <img src={city[0].image} alt={city[0].cityName} />
                <h3>{city[0].cityName}</h3>
            </Link>
        </div>
    );
}
export default DestinationCard;