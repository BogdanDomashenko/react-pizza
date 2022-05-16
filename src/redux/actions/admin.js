import {
  fetchAdminPizzas,
  fetchAllStockPizzas,
  fetchOrdersList,
  updateOrderQuery,
  updatePizzaQuery,
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

const setAdminPizzas = (pizzas) => {
  return {
    type: "SET_ADMIN_PIZZAS",
    payload: pizzas,
  };
};

export const setAdminPizzaItem = (id, item) => {
  return {
    type: "SET_ADMIN_PIZZA_ITEM",
    payload: { id, item },
  };
};

export const setAdminError = (error) => {
  return {
    type: "SET_ADMIN_ERROR",
    payload: error,
  };
};

const setAdminStockPizzas = (pizzas) => {
  return {
    type: "SET_ADMIN_STOCK_PIZZAS",
    payload: pizzas,
  };
};

export const removeAdminStockPizzaSize = (id, size) => ({
  type: "REMOVE_ADMIN_STOCK_PIZZA_SIZE",
  payload: { id, size },
});

export const removeAdminStockPizzaType = (id, type) => ({
  type: "REMOVE_ADMIN_STOCK_PIZZA_TYPE",
  payload: { id, type },
});

export const addAdminPizzaSize = (id, size) => ({
  type: "ADD_ADMIN_PIZZA_SIZE",
  payload: { id, size },
});

export const addAdminPizzaType = (id, type) => ({
  type: "ADD_ADMIN_PIZZA_TYPE",
  payload: { id, type },
});

export const setAdminPizzaSizesTypes = (id, types, sizes) => ({
  type: "SET_ADMIN_PIZZA_TYPES_SIZES",
  payload: { id, types, sizes },
});

export const removeAdminPizzaSizesTypes = (id) => ({
  type: "REMOVE_ADMIN_PIZZA_TYPES_SIZES",
  payload: id,
});

export const setTimeoutAdminError = (error) => async (dispatch) => {
  dispatch(setAdminError(error));
  setTimeout(() => {
    dispatch(setAdminError(null));
  }, 3000);
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

export const getAdminPizzas = () => async (dispatch) => {
  try {
    const pizzas = await fetchAdminPizzas();
    dispatch(setAdminPizzas(pizzas));
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        dispatch(logout());
      }
    }
  }
};

export const updatePizza = (id, pizza) => async (dispatch) => {
  dispatch(setAdminError(null));
  try {
    await updatePizzaQuery({ id, ...pizza });
    dispatch(setAdminPizzaItem(id, pizza));
  } catch (error) {
    if (error.response) {
      dispatch(setTimeoutAdminError(error.response.data.message));
      if (error.response.status === 401) {
        dispatch(logout());
      }
    }
  }
};

export const getAdminAllStockPizzas = () => async (dispatch) => {
  try {
    const pizzas = await fetchAllStockPizzas();
    dispatch(setAdminStockPizzas(pizzas));
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        dispatch(logout());
      }
    }
  }
};
