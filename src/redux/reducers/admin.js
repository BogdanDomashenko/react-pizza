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
    case "SET_ORDER_STATUS": {
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload.id
            ? { ...order, status: action.payload.status }
            : order
        ),
      };
    }
    default:
      return state;
  }
};

export default admin;
