import api from "./api";

export const fetchPizzaSizes = async () => {
  return api.get("pizza/sizes").then((response) => response.data);
};

export const fetchPizzaTypes = async () => {
  return api.get("pizza/types").then((response) => response.data);
};
