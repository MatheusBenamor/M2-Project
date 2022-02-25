import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel as CarouselBS } from 'react-bootstrap'
import "../components/DestinationDetails.css"

const DestinationDetails = ({ destinations }) => {
    const [destination, setDestinations] = useState({})

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    const { id } = useParams()

    useEffect(() => {
        const getOneDestination = async () => {
            const { data } = await axios.get(`https://ironrest.herokuapp.com/touristDestinations/${id}`)
            setDestinations(data)

        }
        getOneDestination()
    }, [id])

    return (
        <div className='card-container'>
            {destination._id ? <div>
                <h3>{destination.name}</h3>
                <p>detalhes do pais {destination.name}</p>
                <img className="country-img" src={destination.city[0].image} alt={destination.city[0].cityName} />
                <h3>Language: {destination.city[0].language}</h3>
                <h3>Coin: {destination.city[0].coin}</h3>
                

                <CarouselBS activeIndex={index} onSelect={handleSelect}>
                    {destination.city.map(destination => (

                        <CarouselBS.Item key={destination.cityName}>
                            <img
                                className="d-block w-60"
                                src={destination.touristAttractions[0].image}
                                alt={destination.cityName}
                            />
                            <CarouselBS.Caption>
                                <h3 className='city-img'>{destination.touristAttractions[0].name}</h3>
                            </CarouselBS.Caption>
                        </CarouselBS.Item>
                    ))}
                </ CarouselBS>
            </div>
                : <div><p>Não funcionou</p></div>}
        </div>


    );
}
export default DestinationDetails;