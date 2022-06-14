import React from "react";
import DestinationCard from '../components/DestinationCard';
import "../components/AllCities.css"

const AllCities = ({ destinations }) => {

    return (

        <div>
            <p className="cities-title">Choose a country to start to explore!</p>
            {destinations.map(destination => <DestinationCard destinations={destinations} key={destination._id} {...destination} />)}
        </div>
    );

}
export default AllCities;