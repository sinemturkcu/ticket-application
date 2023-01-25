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
