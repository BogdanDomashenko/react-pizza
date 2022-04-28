const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      const currentPizzaItem = !state.items[action.payload.id]
        ? { item: action.payload, count: 1 }
        : {
            ...state.items[action.payload.id],
            count: state.items[action.payload.id].count + 1,
          };
      const newItems = {
        ...state.items,
        [action.payload.id]: currentPizzaItem,
      };

      return {
        ...state,
        items: newItems,
      };
    default:
      return {
        ...state,
      };
      break;
  }
};

export default cart;
