import React, { Component } from "react";

import { GetByDepartureAndDirections } from "../services/ticketService";

import wifi from "../assets/wifi.png";
import priz from "../assets/priz.jpg";
import tv from "../assets/tv.png";
import "../css/ticketCard.css";
import { data } from "autoprefixer";

class FindRoadCard extends Component {
  state = {
    tickets: [],
    departureCity: "",
    destinationCity: "",
  };

  handleDepartureCity = (e) => {
    this.setState({ departureCity: e.target.value });
  };

  handleDestinationCity = (e) => {
    this.setState({ destinationCity: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await GetByDepartureAndDirections({
        departureCity: this.state.departureCity,
        destinationCity: this.state.destinationCity,
      });
      const tickets = await res.json();
      let p = [...this.state.tickets];
      for (let i = 0; i < tickets.length; i++) {
        p.push(tickets[i]);
      }
      this.setState({ tickets: p });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <>
        <div class="max-w-lg p-20 bg-white rounded-lg dark:bg-white-800 ">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label
                for="departureCity"
                class="block mb-2 font-medium text-gray-900 dark:text-black text-lg"
              >
                Departure City
              </label>
              <input
                type="text"
                id="departureCity"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="İzmir"
                required
                value={this.state.departureCity}
                onChange={this.handleDepartureCity}
              />
            </div>
            <div>
              <label
                for="destinationCity"
                class="block mb-2 mt-8 font-medium text-gray-900 dark:text-black text-lg"
              >
                Destination City
              </label>
              <input
                type="text"
                id="destinationCity"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Eskişehir"
                required
                value={this.state.destinationCity}
                onChange={this.handleDestinationCity}
              />
            </div>
            <div>
              <button
                type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={this.handleSubmit}
              >
                Find Ticket
              </button>
            </div>
          </form>
        </div>
        <div> Tickets</div>
        <div className="grid grid-cols-1 justify-items-center mb-10 cards">
          {this.state.tickets.map((ticket) => {
            console.log(ticket);

            return (
              <>
                <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700 mb-10 mt-10 w-11/12 ">
                  <div className="grid grid-cols-1 gap-2 mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-black"></div>
                  <div className="grid grid-cols-4 gap-4 mb-4 mt-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                    <div className="text-red-700">{ticket.departureCity}</div>
                    <div>{">"}</div>
                    <div className="text-red-700">{ticket.destinationCity}</div>
                    <div>{ticket.ticketPrice} TL</div>
                  </div>
                  <div className="mt-2 text-md">
                    <div>Capacity: {ticket.capacity}</div>
                  </div>
                  <div className="mt-2 mb-4 text-md">
                    <div>Departure Time: {ticket.departureTime}</div>
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
              </>
            );
          })}
        </div>
      </>
    );
  }
}
export default FindRoadCard;
