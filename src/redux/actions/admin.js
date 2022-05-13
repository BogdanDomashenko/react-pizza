import {
  fetchOrdersList,
  updateOrderQuery,
} from "../../services/admin.service";
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

export const setOrderStatus = (id, status) => {
  return {
    type: "SET_ORDER_STATUS",
    payload: { id, status },
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

export const updateOrder = (id) => async (dispatch, getState) => {
  const state = getState();
  const order = state.admin.orders.find((order) => order.id === id);
  try {
    await updateOrderQuery(order);
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        dispatch(logout());
      }
    }
  }
};
