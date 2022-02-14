import React, { useEffect } from "react";
import Carousel from '../components/Carousel';

const AllCities = ({ destinations, getDestinations }) => {

    useEffect(() => {
        getDestinations()
    }, [])

    return (
        <div>
            <p>Essa página terá a lista com as cidades separadas por países</p>
            <Carousel destinations={destinations} />
        </div>
    )
}
export default AllCities;