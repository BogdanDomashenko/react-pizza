const initialState = {
  orders: [],
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    case "RESET_ADMIN": {
      return initialState;
    }
    default:
      return state;
  }
};

export default admin;
