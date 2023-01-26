import React from "react";
import AddUser from "../../components/addUserForm";
import Sidebar from "../../components/sidebar";

function AddUsers() {
  const isAdmin = localStorage.getItem("role") === "ADMIN";
  if (isAdmin === false) {
    alert("Full authentication required for this field");
  }

  return (
    <div>
      <Sidebar />
      <div class="sm:ml-64">
        <h3 className="m-4 p-4 text-xl">Add User</h3>
        <div class="m-4 p-4 border-dashed border-gray-200 dark:border-gray-700 border-2 rounded-lg">
          <p class="dark:text-white text-gray-800">
            {isAdmin === true && <AddUser />}
          </p>
        </div>
      </div>
    </div>
  );
}
export default AddUsers;
