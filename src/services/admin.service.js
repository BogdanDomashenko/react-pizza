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
