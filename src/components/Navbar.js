import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';
import Ranking from './Ranking';


const navbar = () => {
    return (
        <nav className="nav-style">
        <ul>
        <li><Link to='./Ranking.js'>Ranking</Link></li>
        <li><Link to='./About.js'>About</Link></li>
      </ul>
      </nav>
      /*<div>
      <h1>This is a navbar</h1>
          <p><Ranking/></p>
          <p><About/></p>
      </div>*/
    )
  }
   
  export default navbar;