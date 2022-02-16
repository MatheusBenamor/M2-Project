import React, { useEffect } from "react";
import  Carousel  from "../components/Carousel";


export const Home = ({ destinations, getDestinations }) => {

  useEffect(() => {
    getDestinations()
  }, [])

  return (
    <section className="home">
      <div className="title-space">
        <h1> Essa é minha página principal</h1>
        <Carousel destinations={destinations} />
      </div>

    </section>
  );
}

export default Home;