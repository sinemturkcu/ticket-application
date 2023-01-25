import React from "react";
import DeleteUserTable from "../../components/deleteUser";
import Sidebar from "../../components/sidebar";

class AllUsers extends React.Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div class="sm:ml-64">
          <h3 className="m-4 p-4 text-xl">All Users</h3>
          <div class="m-4 p-4 border-dashed border-gray-200 dark:border-gray-700 border-2 rounded-lg">
            <p class="dark:text-white text-gray-800">
              <DeleteUserTable />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default AllUsers;
