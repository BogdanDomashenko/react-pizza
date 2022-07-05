import api from "../../services/api";
import {fetchAviablePizzas, fetchPizzaSizes, fetchPizzaTypes} from "../../services/pizza.service";

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

export const resetPizzas = () => ({
	type: "RESET_PIZZAS",
});

export const fetchPizzas = (page, size, category) => async (dispatch) => {
	dispatch(setLoaded(false));
	const pizzas = await fetchAviablePizzas(page, size, category);

	const { list, totalCount, sizes, types } = pizzas;
	dispatch(setPizzaSizes(sizes));
	dispatch(setPizzaTypes(types));
	dispatch(setPizzas({ list, totalCount }));
};

export const getPizzaSizes = () => async (dispatch) => {
	const sizes = await fetchPizzaSizes();

	dispatch(setPizzaSizes(sizes));
};

export const getPizzaTypes = () => async (dispatch) => {
	const types = await fetchPizzaTypes();

	dispatch(setPizzaTypes(types));
};
