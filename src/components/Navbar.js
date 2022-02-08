import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../logo.png';

export const navbar = () => {
    return (
        <nav className="nav-style">
        
        <p><img src= {logo} className="nav-logo" alt="logo" /></p>
        <p><i>List of cities</i></p>
        <p><i><NavLink to='ranking'>Ranking</NavLink></i></p>
        <p><i>Comments/Tips</i></p>
        <p><i><NavLink to='about'>About</NavLink></i></p>
      
      </nav>
      
    )
  }
   
  export default navbar;