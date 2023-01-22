import React from "react";
import seat from "../assets/seatIcon2.png";
import wifi from "../assets/wifi.png";
import priz from "../assets/priz.jpg";
import tv from "../assets/tv.png";
function ticketCard() {
  return (
    <div class="max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
      <div className="grid grid-cols-4 gap-4 mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-black">
        <div>Kamil Koç</div>
        <div></div>
        <div></div>
        <div>Rest Seat: 5</div>
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
        <div>İstanbul</div>
        <div>></div>
        <div>Ankara</div>
        <div>250,00 TL</div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-2 text-md">
        <div>10:15</div>
        <div></div>
        <div>18:45</div>
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
  );
}

export default ticketCard;
