import api from "./api";

export const signInQuery = (phoneNumber, password) => {
  return api
    .post("auth/signin", { phoneNumber, password })
    .then((response) => response.data);
};
