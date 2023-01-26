const backendApiUrl = "http://localhost:8082/api";

export const setVehicle = (body) => {
  var request = fetch("http://localhost:8082/api/vehicle/saveVehicle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify(body),
  });

  return request;
};

export const getVehicle = (body) => {
  var request = fetch(backendApiUrl + "/vehicle/getAll", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify(body),
  });

  return request;
};

export const deleteVehicleById = (userId) => {
  var request = fetch(
    "http://localhost:8082/api/vehicle/delete/?id=" + userId,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(),
    }
  );

  return request;
};
