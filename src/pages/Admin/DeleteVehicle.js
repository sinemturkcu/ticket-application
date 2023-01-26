import React from "react";
import DeleteVehicle from "../../components/deleteVehicle";
import Sidebar from "../../components/sidebar";

class DeleteVehicles extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div class="sm:ml-64">
          <h3 className="m-4 p-4 text-xl">All Users</h3>
          <div class="m-4 p-4 border-dashed border-gray-200 dark:border-gray-700 border-2 rounded-lg">
            <p class="dark:text-white text-gray-800">
              <DeleteVehicle />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default DeleteVehicles;
