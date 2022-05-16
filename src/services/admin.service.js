import protectedApi from "./protectedApi";

export const fetchOrdersList = async () => {
  return protectedApi.get("orders/list").then((response) => response.data);
};

export const updateOrderQuery = async (order) => {
  return protectedApi
    .post("order/update", { order })
    .then((response) => response.data);
};

export const fetchAdminPizzas = async () => {
  return protectedApi.get("pizzas/list").then((response) => response.data);
};

export const updatePizzaQuery = async (pizza) => {
  return protectedApi
    .post("pizza/update", { pizza })
    .then((response) => response.data);
};

export const fetchAllStockPizzas = async () => {
  return protectedApi.get("stock/allPizzas").then((response) => response.data);
};

export const setPizzaAvailableQuery = async (id) => {
  return protectedApi
    .get("stock/setPizzaAvailable/" + id)
    .then((response) => response.data);
};

export const setPizzaNotAvailableQuery = async (id) => {
  return protectedApi
    .get("stock/setPizzaNotAvailable/" + id)
    .then((response) => response.data);
};

export const setPizzaTypeAvailableQuery = async (id, typeID, available) => {
  return protectedApi
    .post("stock/setPizzaTypeAvailable", { id, typeID, available })
    .then((response) => response.data);
};

export const setPizzaSizeAvailableQuery = async (id, sizeID, available) => {
  return protectedApi
    .post("stock/setPizzaSizeAvailable", { id, sizeID, available })
    .then((response) => response.data);
};
