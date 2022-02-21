import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logoProject from '../logoProject.png';
import logoIronhack from '../logoIronhack.png';

export const navbar = () => {
    return (
      <>
        <nav className="nav-style">
        <ul>
        <li><NavLink to='/'><img src= {logoProject} className="nav-logo" alt="logo" /></NavLink></li>
        <li><p><i><NavLink to='cities'>List of cities</NavLink></i></p></li>
        <li><p><i><NavLink to='ranking'>Ranking</NavLink></i></p></li>
        <li><p><i><NavLink to='comments'>Comments and Tips</NavLink></i></p></li>
        <li><p><i><NavLink to='about'>About</NavLink></i></p></li>
        <li><img src= {logoIronhack} className="iron-logo" alt="logo-iron" /></li>
        </ul>
      </nav>
      </>
    )
  }
   
  export default navbar;