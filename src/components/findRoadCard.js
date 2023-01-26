import React, { Component, useState } from "react";
import Cookies from "js-cookie";

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

  isAuthenticateUser = localStorage.getItem("role") === "USER";

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
          <>
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <thead class="bg-gray-200 border-b">
                        <tr>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Departure City
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Destination City
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Ticket Price
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Capacity
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Departure Time
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            {" "}
                            Rezervation
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Buy
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.tickets.map((user) => (
                          <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {user.id}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {user.departureCity}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {user.destinationCity}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {user.seatPrice}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {user.capacity}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {user.departureTime}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {" "}
                              <div>
                                {this.isAuthenticateUser === true && (
                                  <div id="" className="grid justify-center">
                                    <div className="flex justify-evenly">
                                      <button
                                        id="addingButton"
                                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          //           window.location.href = "/myTickets";
                                        }}
                                      >
                                        Reservation
                                      </button>
                                    </div>
                                  </div>
                                )}
                                {this.isAuthenticateUser === false && (
                                  <div id="" className="grid justify-center">
                                    <div className="flex justify-evenly">
                                      <button
                                        id="addingButton"
                                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          window.location.href = "/login";
                                        }}
                                      >
                                        Reservation
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {" "}
                              <div>
                                {this.isAuthenticateUser === true && (
                                  <div id="" className="grid justify-center">
                                    <div className="flex justify-evenly">
                                      <button
                                        id="addingButton"
                                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          //   window.location.href = "/buyTicket";
                                        }}
                                      >
                                        Buy
                                      </button>
                                    </div>
                                  </div>
                                )}
                                {this.isAuthenticateUser === false && (
                                  <div id="" className="grid justify-center">
                                    <div className="flex justify-evenly">
                                      <button
                                        id="addingButton"
                                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          window.location.href = "/login";
                                        }}
                                      >
                                        Buy
                                      </button>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </>
    );
  }
}
export default FindRoadCard;
