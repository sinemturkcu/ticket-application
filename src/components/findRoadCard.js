import React from "react";
import { Link } from "react-router-dom";
import Ticket from "../pages/Ticket";

function FindRoadCard() {
  return (
    <>
      <div class="max-w-lg p-20 bg-white rounded-lg dark:bg-white-800 ">
        <form>
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
              placeholder="Eskişehir"
              required
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
              placeholder="Ankara"
              required
            />
          </div>
          <div>
            <button
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={<Ticket />}
            >
              Find Ticket
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default FindRoadCard;
