import React from "react";
import "./AboutUs.css";
import matheus from "../matheus.png";
import eduardo from "../eduardo.png";
import githubIcon from "../githubIcon.png";
import lkIcon from "../lkIcon.png";

const info = () => {
  return (
    <div className="about-container">
      <div>
        <h2>Eduardo Brandião</h2>
        <img src={eduardo} className="edu-img" alt="eduardo-img" />
        <div className="about-text">
        <p>Data science professional with SAP integration, fullstack development e software engineering student</p>
        <p><img className="logo" src={githubIcon} alt="gitlogo"/>Link GitHub vai aqui href="https://github.com/ebrandiao"</p>
        <p><img className="logo" src={lkIcon} alt="lklogo"/>Link Linkedin Eduardo href= "https://www.linkedin.com/in/eduardobrandiao"</p>
        </div>
      </div>

      <div>
        <h2>Matheus Benamor</h2>
        <img src={matheus} className="mathe-img" alt="matheus-img" />
        <div className="about-text">
        <p>Web Development student at Ironhack São Paulo. Brazilian from Brasília, but currently living in Portugal.</p>
        <p> My passions are travel, watch series and play games.</p>
         <p><img className="logo" src={githubIcon} alt="gitlogo"/> Link GitHub vai aqui href="https://github.com/MatheusBenamor"</p>
         </div>
      </div>
    </div>
  );
};

export default info;
