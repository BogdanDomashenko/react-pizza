import {
	logoutQuery,
	signInQuery,
	signUpQery,
} from "../../services/auth.service";
import { fetchUserOrders } from "../../services/order.service";
import { resetAdmin } from "./admin";

export const setUserData = (data) => {
	return {
		type: "SET_USER_DATA",
		payload: data,
	};
};

export const setAuthError = (error) => {
	return {
		type: "SET_AUTH_ERROR",
		payload: error,
	};
};

export const setUserRole = (role) => {
	return {
		type: "SET_USER_ROLE",
		payload: role,
	};
};

export const resetUser = () => {
	return {
		type: "RESET_USER",
	};
};

export const setOrders = (orders) => {
	return {
		type: "SET_ORDERS",
		payload: orders,
	};
};

export const getUserOrders = (page, size) => async (dispatch) => {
	try {
		const data = await fetchUserOrders(page, size);
		dispatch(setOrders(data));
	} catch (error) {
		dispatch(setAuthError(error.response.data.message));
	}
};

export const signUp = (number, password) => async (dispatch) => {
	try {
		const { id, phoneNumber, role } = await signUpQery(number, password);
		dispatch(setUserData({ id, phoneNumber }));
		dispatch(setUserRole(role));
	} catch (error) {
		dispatch(setAuthError(error.response.data.message));
	}
};

export const signIn = (number, password) => async (dispatch) => {
	try {
		const { id, phoneNumber, role } = await signInQuery(number, password);
		dispatch(setUserData({ id, phoneNumber }));
		dispatch(setUserRole(role));
	} catch (error) {
		dispatch(setAuthError(error.response.data.message));
	}
};

export const logout = () => async (dispatch) => {
	try {
		await logoutQuery();
		dispatch(resetAdmin());
		dispatch(resetUser());
	} catch (error) {}
};
