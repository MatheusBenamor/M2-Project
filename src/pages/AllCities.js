import React from "react";
import DestinationCard from '../components/DestinationCard';

const AllCities = ({ destinations }) => {

    return (

        <div>
            <p>Essa página terá a lista com as cidades separadas por países</p>
            {destinations.map(destination => <DestinationCard destinations={destinations} key={destination._id} {...destination} />)}
        </div>
    );

}
export default AllCities;