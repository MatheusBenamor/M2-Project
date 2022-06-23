import React, { useEffect } from "react";
import "../components/Carousel.css";
import "../components/Home.css";
import { Link } from 'react-router-dom';
import home from "../home.png";



export const Home = ({ destinations, getDestinations, _id }) => {

  useEffect(() => {
    getDestinations()
  }, [])

  return (
    <>
    <img src={home} className="home-img" alt="home-img" />
    </>
  );
}


export default Home;