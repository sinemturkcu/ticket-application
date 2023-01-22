import React from "react";
import road from "../assets/road2.jpg";
import "../css/heroSection.css";

function HeroSection() {
  return (
    <div>
      <div className="hero-container">
        <img src={road} className="hero" alt="RoadImage"></img>

        <h4>Travel without limits</h4>
        <p>What are you waiting for?</p>
      </div>
    </div>
  );
}

export default HeroSection;
