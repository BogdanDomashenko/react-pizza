import axios from "axios";
import { checkoutOrder } from "../../services/order.service";
import { resetCart } from "./cart";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get("http://localhost:3001/stock/aviablePizzas").then((response) => {
    const fields = {};

    response.data.forEach((item) => {
      fields[item.id] = { size: item.sizes[0], type: item.types[0] };
    });

    dispatch(setPizzas(response.data));
    dispatch(setSelectedFields(fields));
  });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

export const setSelectedFields = (fields) => ({
  type: "SET_SELECTED_FIELDS",
  payload: fields,
});

export const setSelectedField = (id, field) => ({
  type: "SET_SELECTED_FIELD",
  payload: { id, field },
});
