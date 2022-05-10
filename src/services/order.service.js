import api from "./api";

export const checkoutOrder = (number, orderList) => {
  return api
    .post("order/checkout", { orderList, number })
    .then((response) => response.data);
};

export const fetchOrder = (id) => {
  return api.get("order/" + id).then((response) => response.data);
};
