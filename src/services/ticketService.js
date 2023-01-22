import axios from "axios";

export default class ResumeService {
  getAllTickets() {
    return axios.get("http://localhost:8082/api/ticket/getAll");
  }
  getByFilter(departureCity, destinationCity) {
    return axios.post(
      `http://localhost:8082/api/ticket/getByFilter?departureCity=${departureCity}&destinationCity=${destinationCity}`
    );
  }
}
