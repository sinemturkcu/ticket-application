import axios from "axios";

export default class TicketService {
  getAllTickets() {
    return axios.get("http://localhost:8082/api/ticket/getAll");
  }
}
const backendApiUrl = "http://localhost:8082/api";

export const GetMyTickets = (email) => {
  var request = fetch(backendApiUrl + "/ticket/getByEmail?email=" + email, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return request;
};

export const UsersTickets = () => {
  var request = fetch(backendApiUrl + "/ticket/getNotNullTickets", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });

  return request;
};

export const GetByDepartureAndDirections = ({
  departureCity,
  destinationCity,
}) => {
  var request = fetch(
    "http://localhost:8082/api/vehicle/getVehicle/?departureCity=" +
      departureCity +
      "&destinationCity=" +
      destinationCity,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return request;
};
