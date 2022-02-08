import React from "react";
import "./AboutUs.css";
import matheus from "../matheus.png";
import eduardo from "../eduardo.png";

const info = () => {
  return (
    <div className="about-container">
      <div>
        <h2>Eduardo Brandião</h2>
        <img src={eduardo} className="edu-img" alt="eduardo-img" />
        <p>Data science professional with SAP integration, fullstack development e software engineering student</p>
        <p>Link GitHub vai aqui href="https://github.com/ebrandiao"</p>
      </div>

      <div>
        <h2>Matheus Benamor</h2>
        <img src={matheus} className="mathe-img" alt="matheus-img" />
        <p>Web Development student at Ironhack São Paulo. Brazilian from Brasília, but currently living in Portugal.</p>
        <p> My passions are travel, watch series and play games.</p>
         <p>Link GitHub vai aqui href="https://github.com/MatheusBenamor"</p>
      </div>
    </div>
  );
};

export default info;
