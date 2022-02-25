import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel as CarouselBS } from "react-bootstrap";
import "../components/DestinationDetails.css";
import sticky from "../TravelPost.png";

const DestinationDetails = ({ destinations }) => {
  const [destination, setDestinations] = useState({});

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const { id } = useParams();

  useEffect(() => {
    const getOneDestination = async () => {
      const { data } = await axios.get(
        `https://ironrest.herokuapp.com/touristDestinations/${id}`
      );
      setDestinations(data);
    };
    getOneDestination();
  }, [id]);

  return (
    <div className="card-container">
      {destination._id ? (
        <div>
          <div className="city-info">
            <img
              className="city-img"
              src={destination.city[0].image}
              alt={destination.city[0].cityName}
            />
            <div className="city-text">
              <div className="country-info">
                <img
                  className="country-flag"
                  src={destination.flag}
                  alt="country-flag"
                />
                <p>{destination.name}</p>
              </div>
              <br></br>
              <div className="country-data">
              <p>Language: {destination.city[0].language}</p>
              <p>Coin: {destination.city[0].coin}</p>
              <p>Score: {destination.city[0].score}</p>
              </div>
            </div>
          </div>

          <p className="tourist-title">Tourist Attractions</p>
          <section className="carousel-style">
            <CarouselBS activeIndex={index} onSelect={handleSelect}>
              {destination.city.map((destination) => (
                <CarouselBS.Item key={destination.cityName}>
                  <div className="img-size">
                    {destination.touristAttractions[0].name}(
                    {destination.touristAttractions[0].type}) -
                    {destination.cityName}
                    <img
                      className="d-block w-60"
                      src={destination.touristAttractions[0].image}
                      alt={destination.cityName}
                    />
                  </div>
                  <CarouselBS.Caption>
                    <p className="city-img">
                      ({destination.touristAttractions[0].type}) -
                      {destination.cityName}
                    </p>
                  </CarouselBS.Caption>
                </CarouselBS.Item>
              ))}
            </CarouselBS>
          </section>
        </div>
      ) : (
        <div>
          <p>Não funcionou</p>
        </div>
      )}
    </div>
  );
};
export default DestinationDetails;
