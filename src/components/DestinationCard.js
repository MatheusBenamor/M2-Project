import React from 'react';
import { Link } from 'react-router-dom';
import "../components/DestinationCard.css"

const DestinationCard = ({ name, flag, city, _id }) => {
    return (
        <div className="destination-card">
            <Link to={`/destination/${_id}`}>
                <ul>{name}</ul>
                <img className="flag-size"src={flag} alt="countryFlag" />
            </Link>
        </div>
    );
}
export default DestinationCard;