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
