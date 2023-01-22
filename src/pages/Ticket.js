import React from "react";
import Navbar from "../components/navbar";
import TicketCard from "../components/ticketCard";
class Ticket extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="mt-10 mx-20 flex justify-center grid grid-cols-2 gap-2 mb-2">
          <div>
            <TicketCard />
          </div>
          <div>
            <TicketCard />
          </div>
        </div>
      </div>
    );
  }
}
export default Ticket;
