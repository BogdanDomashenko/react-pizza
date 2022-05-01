import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get("http://localhost:3001/pizzas/list").then((response) => {
    dispatch(setPizzas(response.data));
  });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});
