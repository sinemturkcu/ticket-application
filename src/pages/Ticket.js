import React from "react";
import HeroSection from "../components/heroSection";
import Navbar from "../components/navbar";
import TicketCard from "../components/ticketCard";

class Ticket extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <HeroSection />

        <TicketCard />
      </div>
    );
  }
}
export default Ticket;
