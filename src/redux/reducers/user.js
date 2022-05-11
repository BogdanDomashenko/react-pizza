import { ROLES } from "../../utils/constants";

const initialState = {
  role: ROLES.phantom,
  data: {},
  authError: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        data: action.payload,
      };
    case "SET_AUTH_ERROR":
      return {
        ...state,
        authError: action.payload,
      };
    case "SET_USER_ROLE": {
      return {
        ...state,
        role: action.payload,
      };
    }
    default:
      return state;
  }
};

export default user;
