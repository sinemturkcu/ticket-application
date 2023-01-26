import React from "react";
import FindRoadCard from "../components/findRoadCard";
import MyTicket from "../components/myTickets";
import Navbar from "../components/navbar";

class FindBus extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <FindRoadCard />
      </div>
    );
  }
}
export default FindBus;
