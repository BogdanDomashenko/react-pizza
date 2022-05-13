import protectedApi from "./protectedApi";

export const fetchOrdersList = async () => {
  return protectedApi.get("orders/list").then((response) => response.data);
};

export const updateOrderQuery = async (order) => {
  return protectedApi
    .post("order/update", { order })
    .then((response) => response.data);
};
