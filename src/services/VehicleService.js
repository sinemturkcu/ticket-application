export const setVehicle = (body) => {
  var request = fetch("http://localhost:8082/api/vehicle/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return request;
};
