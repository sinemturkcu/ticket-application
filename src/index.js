import React from "react";
import ReactDOM from "react-dom/client";
import "flowbite";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/navbar";
import SelamAdmin from "./pages/SelamAdmin";
import SelamUser from "./pages/TicketSearch";
import Main from "./pages/Main";
import TicketCard from "./components/ticketCard";
import Ticket from "./pages/Ticket";
import AdminHome from "./pages/Admin/AdminHome";
import AllUsers from "./pages/Admin/AllUsers";
import AddUsers from "./pages/Admin/AddUsers";
import DeleteUser from "./pages/Admin/DeleteUser";
import AllVehicles from "./pages/Admin/AllVehicles";
import AddVehicle from "./pages/Admin/AddVehicle";
import MyTickets from "./pages/MyTickets";
import FindBus from "./pages/FindBus";
import DeleteVehicle from "./pages/Admin/DeleteVehicle";
import UsersTickets from "./pages/Admin/UsersTickets";
import BuyTicketPage from "./pages/BuyTicket";

<script
  src="https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js"
  integrity="sha512-MY2jfK3DBnVzdS2V8MXo5lRtr0mNRroUI9hoLVv2/yL3vrJTam3VzASuKQ96fLEpyYIT4a8o7YgtUs5lPjiLVQ=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
></script>;

class MyElement extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/selamAdmin" element={<SelamAdmin />} />
          <Route path="/ticketSearch" element={<SelamUser />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="admin/home" element={<AdminHome />} />
          <Route path="admin/allUsers" element={<AllUsers />} />
          <Route path="admin/addUser" element={<AddUsers />} />
          <Route path="admin/allVehicles" element={<AllVehicles />} />
          <Route path="admin/addVehicle" element={<AddVehicle />} />
          <Route path="/myTickets" element={<MyTickets />} />
          <Route path="/buyTicket" element={<BuyTicketPage />} />
          <Route path="/findBus" element={<FindBus />} />
          <Route path="admin/deleteUser" element={<DeleteUser />} />
          <Route path="admin/deleteVehicle" element={<DeleteVehicle />} />
          <Route path="admin/usersTickets" element={<UsersTickets />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyElement />);
