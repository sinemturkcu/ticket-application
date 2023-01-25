import React from "react";
import Sidebar from "../../components/sidebar";
import AddVehicle from "../../components/addVehicle";

class AllVehicles extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div class="sm:ml-64">
          <h3 className="m-4 p-4 text-xl">Add Vehicles</h3>
          <div class="m-4 p-4 border-dashed border-gray-200 dark:border-gray-700 border-2 rounded-lg">
            <p class="dark:text-white text-gray-800">
              <AddVehicle />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default AllVehicles;
