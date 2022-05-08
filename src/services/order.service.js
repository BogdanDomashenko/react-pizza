import api from "./api";

export const checkoutOrder = (number, orderList) => {
  return api.post("order/checkout", { orderList, number }).then();
};

export const fetchOrder = (id) => {
  return api.post("order", { id }).then((response) => response.data);
};
