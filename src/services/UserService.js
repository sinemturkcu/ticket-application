const backendApiUrl = "http://localhost:8082/api";

export const setUserDetails = (body) => {
  var request = fetch("http://localhost:8082/api/user/saveUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return request;
};
export const getUser = (body) => {
  var request = fetch(backendApiUrl + "/user/getAll", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return request;
};
export const deleteUserById = (userId) => {
  var request = fetch(
    "http://localhost:8082/api/user/deleteUser/?id=" + userId,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }
  );

  return request;
};
