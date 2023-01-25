import React from "react";
import MyTicket from "../components/myTickets";
import Navbar from "../components/navbar";

class MyTickets extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <MyTicket />
      </div>
    );
  }
}
export default MyTickets;
