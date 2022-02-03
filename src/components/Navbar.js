import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import About from './About';
import Ranking from './Ranking';
import logo from '../logo.png';


const navbar = () => {
    return (
        <nav className="nav-style">
        <ul>
        <li><img src= {logo} className="nav-logo" alt="logo" /></li>
        <li>List of cities</li>
        <li><Link to='./Ranking.js'>Ranking</Link></li>
        <li>Comments/Tips</li>
        <li><Link to='./About.js'>About</Link></li>
      </ul>
      </nav>
      
    )
  }
   
  export default navbar;