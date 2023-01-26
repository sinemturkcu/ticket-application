import React from "react";
import Sidebar from "../../components/sidebar";
import UserTicket from "../../components/usersTickets";

function UsersTickets() {
  const isAdmin = localStorage.getItem("role") === "ADMIN";
  if (isAdmin === false) {
    alert("Full authentication required for this field");
  }

  return (
    <div>
      <Sidebar />
      <div class="sm:ml-64">
        <h3 className="m-4 p-4 text-xl">All User Ticket</h3>
        <div class="m-4 p-4 border-dashed border-gray-200 dark:border-gray-700 border-2 rounded-lg">
          <p class="dark:text-white text-gray-800">
            {isAdmin === true && <UserTicket />}
          </p>
        </div>
      </div>
    </div>
  );
}
export default UsersTickets;
