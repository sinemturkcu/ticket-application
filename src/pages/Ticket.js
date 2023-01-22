import React from "react";
import TicketCard from "../components/main";
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
