export const GetAllVehicles = () => {
  var request = fetch("http://localhost:8082/api/vehicle/getAll", {
    method: "GET",
  });

  return request;
};
