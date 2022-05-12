import api from "../../services/api";
import { logoutQuery, signInQuery } from "../../services/auth.service";
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
