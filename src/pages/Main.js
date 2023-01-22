import React from "react";
import HeroSection from "../components/heroSection";
import Navbar from "../components/navbar";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <HeroSection />
      </div>
    );
  }
}
export default Main;
