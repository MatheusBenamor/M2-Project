import React, { useEffect } from "react";
import  Carousel  from "../components/Carousel";
import "../components/Carousel.css";
import "../components/Home.css";


export const Home = ({ destinations, getDestinations }) => {

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
        <Carousel destinations={destinations} />
      </div>
      </section>
    </section>
    </section>
    </>
  );
}

export default Home;