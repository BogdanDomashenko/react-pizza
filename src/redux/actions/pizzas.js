import axios from "axios";
import { fetchPizzaSizes, fetchPizzaTypes } from "../../services/pizza.service";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

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

const setPizzaSizes = (sizes) => ({
  type: "SET_PIZZA_SIZES",
  payload: sizes,
});

const setPizzaTypes = (types) => ({
  type: "SET_PIZZA_TYPES",
  payload: types,
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

export const getPizzaSizes = () => async (dispatch) => {
  const sizes = await fetchPizzaSizes();

  dispatch(setPizzaSizes(sizes));
};

export const getPizzaTypes = () => async (dispatch) => {
  const types = await fetchPizzaTypes();

  dispatch(setPizzaTypes(types));
};
