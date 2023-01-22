import React, { useEffect, useState } from "react";
import seat from "../assets/seatIcon2.png";
import wifi from "../assets/wifi.png";
import priz from "../assets/priz.jpg";
import tv from "../assets/tv.png";
import "../css/ticketCard.css";
import TicketService from "../services/ticketService";

function TicketCard() {
  const [tickets, ticket] = useState([]);
  let ticketService = new TicketService();
  useEffect(() => {
    ticketService.getByFilter().then((result) => ticket(result.data));
  });

  return (
    <div className="grid grid-cols-2 justify-items-center mb-10 cards">
      {tickets.map((ticket) => (
        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700 mb-10 mt-10 w-11/12 ">
          <div className="grid grid-cols-4 gap-4 mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-black">
            <div>{ticket.vehicle.vehicleCompany}</div>
            <div></div>
            <div></div>
            <div>Rest Seat: {ticket.vehicle.restSeat}</div>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
            <div>{ticket.route.departureCity}</div>
            <div>></div>
            <div>{ticket.route.destinationCity}</div>
            <div>{ticket.price}</div>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-2 text-md">
            <div>{ticket.departureTime}</div>
            <div></div>
            <div>{ticket.arrivalTime}</div>
            <div>
              <button
                type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Buy
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-3 ">
            <div>
              <img src={wifi} className="h-8"></img>
            </div>
            <div>
              {" "}
              <img src={priz} className="h-8"></img>
            </div>
            <div>
              {" "}
              <img src={tv} className="h-8"></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TicketCard;
