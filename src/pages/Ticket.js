import React from "react";
import FindRoadCard from "../components/findRoadCard";
import TicketCard from "../components/ticketCard";
import Navbar from "../components/navbar";

class Ticket extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <FindRoadCard />
        <TicketCard />
      </div>
    );
  }
}
export default Ticket;
