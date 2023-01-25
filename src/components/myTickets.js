import React, { Component } from "react";
import { GetMyTickets } from "../services/ticketService";

import wifi from "../assets/wifi.png";
import priz from "../assets/priz.jpg";
import tv from "../assets/tv.png";
import "../css/ticketCard.css";

class MyTickets extends Component {
  state = {
    myTickets: [],
  };

  constructor() {
    super();

    const userEmail = localStorage.getItem("email");

    GetMyTickets(userEmail).then((res) =>
      res.json().then((tickets) => {
        let p = [...this.state.myTickets];
        for (let i = 0; i < tickets.length; i++) {
          p.push(tickets[i]);
        }
        this.setState({ myTickets: p });
      })
    );
  }

  render() {
    return (
      <>
        <div>My Tickets</div>
        <div className="grid grid-cols-1 justify-items-center mb-10 cards">
          {this.state.myTickets.map((ticket) => {
            console.log(ticket);
            return (
              <>
                <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700 mb-10 mt-10 w-11/12 ">
                  <div className="grid grid-cols-1 gap-2 mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-black">
                    <div>Ticket Number : {ticket.id}</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 mb-4 mt-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                    <div className="text-red-700">{ticket.fromDirection}</div>
                    <div>{">"}</div>
                    <div className="text-red-700">{ticket.toDirection}</div>
                    <div>{ticket.ticketPrice} TL</div>
                  </div>
                  <div className="mt-2 text-md">
                    <div>Seat Number: {ticket.ticketSeat}</div>
                  </div>
                  <div className="mt-2 text-md">
                    <div>Departure Time: {ticket.busDepartureTime}</div>
                  </div>
                  <div className="mt-2 mb-5 text-md">
                    <div>Ticket Date: {ticket.ticketDate}</div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-3 ">
                    <div>
                      <img src={wifi} className="h-8" alt="wifi"></img>
                    </div>
                    <div>
                      {" "}
                      <img src={priz} className="h-8" alt="priz"></img>
                    </div>
                    <div>
                      {" "}
                      <img src={tv} className="h-8" alt="tv"></img>
                    </div>
                  </div>
                </div>
                ;
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default MyTickets;
