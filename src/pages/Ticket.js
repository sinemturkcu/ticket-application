import React from "react";
import FindRoadCard from "../components/findRoadCard";
import TicketCard from "../components/ticketByCityCard";
import Navbar from "../components/navbar";

class Ticket extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <TicketCard />
      </div>
    );
  }
}
export default Ticket;
