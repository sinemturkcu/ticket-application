import axios from "axios";

export default class ResumeService {
  getAllTickets() {
    return axios.get("http://localhost:8082/api/ticket/getAll");
  }
}
