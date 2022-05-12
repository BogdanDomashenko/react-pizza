import { fetchOrdersList } from "../../services/admin.service";
import { logout } from "./user";

export const setOrders = (orders) => {
  return {
    type: "SET_ORDERS",
    payload: orders,
  };
};

export const resetAdmin = () => {
  return {
    type: "RESET_ADMIN",
  };
};

export const getOrders = () => async (dispatch) => {
  try {
    const orders = await fetchOrdersList();
    dispatch(setOrders(orders));
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        dispatch(logout());
      }
    }
  }
};
