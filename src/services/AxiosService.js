import axios from "axios";

export default class AdminService {
  getAllUser() {
    return axios.get("http://localhost:8082/api/user/getAll");
  }
  getAllVehicles() {
    return axios.get("http://localhost:8082/api/vehicle/getAll");
  }
}
