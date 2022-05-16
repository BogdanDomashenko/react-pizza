import api from "./api";
import protectedApi from "./protectedApi";

export const fetchPizzaSizes = async () => {
  return api.get("pizza/sizes").then((response) => response.data);
};

export const fetchPizzaTypes = async () => {
  return api.get("pizza/types").then((response) => response.data);
};

export const addPizzaQuery = async (pizza) => {
  return protectedApi
    .post("pizza/add", { ...pizza })
    .then((response) => response.data);
};

export const deletePizzaQuery = async (id) => {
  return protectedApi
    .get("pizza/delete/" + id)
    .then((response) => response.data);
};
