import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../logo.png';

export const navbar = () => {
    return (
        <nav className="nav-style">
        
        <p><NavLink to='/'><img src= {logo} className="nav-logo" alt="logo" /></NavLink></p>
        <p><i><NavLink to='cities'>List of cities</NavLink></i></p>
        <p><i><NavLink to='ranking'>Ranking</NavLink></i></p>
        <p><i><NavLink to='comments'>Comments and Tips</NavLink></i></p>
        <p><i><NavLink to='about'>About</NavLink></i></p>
      
      </nav>
      
    )
  }
   
  export default navbar;