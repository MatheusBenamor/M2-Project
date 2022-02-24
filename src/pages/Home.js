import React, { useEffect } from "react";
import  Carousel  from "../components/Carousel";
import "../components/Carousel.css";


export const Home = ({ destinations, getDestinations }) => {

  useEffect(() => {
    getDestinations()
  }, [])

  return (
    <section className="carousel-style">
    <section className="home">
      <div className="title-space">
        <Carousel destinations={destinations} />
      </div>
      </section>
    </section>
  );
}

export default Home;