import protectedApi from "./protectedApi";

export const fetchOrdersList = async () => {
  return protectedApi.get("orders/list").then((response) => response.data);
};
