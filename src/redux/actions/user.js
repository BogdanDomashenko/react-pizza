import api from "../../services/api";
import { signInQuery } from "../../services/auth.service";

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

export const signIn = (number, password) => async (dispatch) => {
  try {
    const { id, phoneNumber, role } = await signInQuery(number, password);
    dispatch(setUserData({ id, phoneNumber }));
    dispatch(setUserRole(role));
  } catch (error) {
    dispatch(setAuthError(error.response.data.message));
  }
};
