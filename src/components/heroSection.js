import React from "react";
import road from "../assets/road2.jpg";
import "../css/heroSection.css";
import FindRoadCard from "./findRoadCard";

function HeroSection() {
  return (
    <div>
      <div className="hero-container">
        <img src={road} className="hero" alt="RoadImage"></img>

        <h4>Travel without limits</h4>
        <p>What are you waiting for?</p>
        <a href="/ticketSearch">
          <button
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-md px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-10"
          >
            Find Ticket
          </button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
