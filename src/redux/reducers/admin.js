const initialState = {
  orders: [],
  pizzas: [],
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
    case "SET_ADMIN_PIZZAS": {
      return {
        ...state,
        pizzas: action.payload,
      };
    }
    case "SET_ADMIN_PIZZA_ITEM": {
      return {
        ...state,
        pizzas: state.pizzas.map((pizza) =>
          pizza.id === action.payload.id
            ? { id: action.payload.id, ...action.payload.item }
            : pizza
        ),
      };
    }
    default:
      return state;
  }
};

export default admin;
