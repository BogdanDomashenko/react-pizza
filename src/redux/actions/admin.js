import {
  fetchAdminPizzas,
  fetchAllStockPizzas,
  fetchOrdersList,
  setPizzaAvailableQuery,
  setPizzaNotAvailableQuery,
  setPizzaSizeAvailableQuery,
  setPizzaTypeAvailableQuery,
  updateOrderQuery,
  updatePizzaQuery,
} from "../../services/admin.service";
import { addPizzaQuery, deletePizzaQuery } from "../../services/pizza.service";

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

const addAdminPizza = (pizza) => ({
  type: "ADD_ADMIN_PIZZA",
  payload: pizza,
});

const deleteAdminPizza = (id) => ({
  type: "DELETE_ADMIN_PIZZA",
  payload: id,
});

export const setTimeoutAdminError = (error) => async (dispatch) => {
  dispatch(setAdminError(error));
  setTimeout(() => {
    dispatch(setAdminError(null));
  }, 3000);
};

export const getOrders = (page, size) => async (dispatch) => {
  try {
    const orders = await fetchOrdersList(page, size);
    dispatch(setOrders(orders));
  } catch (error) {}
};

export const updateOrder = (id) => async (dispatch, getState) => {
  const state = getState();
  const order = state.admin.orders.find((order) => order.id === id);
  try {
    await updateOrderQuery(order);
  } catch (error) {}
};

export const getAdminPizzas = (page, size) => async (dispatch) => {
  try {
    const pizzas = await fetchAdminPizzas(page, size);
    dispatch(setAdminPizzas(pizzas));
  } catch (error) {}
};

export const updatePizza = (id, pizza) => async (dispatch) => {
  dispatch(setAdminError(null));
  try {
    await updatePizzaQuery({ id, ...pizza });
    dispatch(setAdminPizzaItem(id, pizza));
  } catch (error) {
    if (error.response) {
      dispatch(setTimeoutAdminError(error.response.data.message));
    }
  }
};

export const getAdminAllStockPizzas = (page, size) => async (dispatch) => {
  try {
    const pizzas = await fetchAllStockPizzas(page, size);
    dispatch(setAdminStockPizzas(pizzas));
  } catch (error) {
    if (error.response) {
    }
  }
};

export const setPizzaAvailable = (id, types, sizes) => async (dispatch) => {
  try {
    await setPizzaAvailableQuery(id);
    dispatch(setAdminPizzaSizesTypes(id, types, sizes));
  } catch (error) {
    if (error.response) {
      dispatch(setTimeoutAdminError(error.response.data.message));
    }
  }
};

export const setPizzaNotAvailable = (id) => async (dispatch) => {
  try {
    await setPizzaNotAvailableQuery(id);
    dispatch(removeAdminPizzaSizesTypes(id));
  } catch (error) {
    if (error.response) {
      dispatch(setTimeoutAdminError(error.response.data.message));
    }
  }
};

export const setPizzaSizeAvailable =
  (id, name, sizeID, available) => async (dispatch) => {
    try {
      await setPizzaSizeAvailableQuery(id, sizeID, !available);
      if (available) {
        dispatch(removeAdminStockPizzaSize(id, name));
      } else {
        dispatch(addAdminPizzaSize(id, name));
      }
    } catch (error) {
      if (error.response) {
        dispatch(setTimeoutAdminError(error.response.data.message));
      }
    }
  };

export const setPizzaTypeAvailable =
  (id, name, typeID, available) => async (dispatch) => {
    try {
      await setPizzaTypeAvailableQuery(id, typeID, !available);
      if (available) {
        dispatch(removeAdminStockPizzaType(id, name));
      } else {
        dispatch(addAdminPizzaType(id, name));
      }
    } catch (error) {
      if (error.response) {
        dispatch(setTimeoutAdminError(error.response.data.message));
      }
    }
  };
export const addPizza = (pizza) => async (dispatch) => {
  try {
    await addPizzaQuery(pizza);
    dispatch(addAdminPizza(pizza));
  } catch (error) {
    if (error.response) {
      dispatch(setTimeoutAdminError(error.response.data.message));
    }
  }
};

export const deletePizza = (id) => async (dispatch) => {
  try {
    await deletePizzaQuery(id);
    dispatch(deleteAdminPizza(id));
  } catch (error) {
    if (error.response) {
      dispatch(setTimeoutAdminError(error.response.data.message));
    }
  }
};
