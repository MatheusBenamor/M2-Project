import React, { useEffect } from "react";
import  Carousel  from "../components/Carousel";
import "../components/Carousel.css";
import "../components/Home.css";
import { Link } from 'react-router-dom';


export const Home = ({ destinations, getDestinations, _id }) => {

  useEffect(() => {
    getDestinations()
  }, [])

  return (
    <>
    <section className="home-style" >
    <div className="container">
  <h2 className="title">
    <span class="title-word title-word-1">Explore!</span>
  </h2>
</div>
    <section className="carousel-style">
    <section className="home">
      <div className="title-space">
      <Link to={`/destination/6210d8015523020017eb9da8`}>
        <Carousel destinations={destinations} />
      </Link>
      </div>
      </section>
    </section>
    </section>
    </>
  );
}

export default Home;