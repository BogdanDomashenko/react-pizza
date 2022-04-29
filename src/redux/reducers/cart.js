const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM": {
      const currentId = action.payload.id;
      const currentPizzaItem = !state.items[currentId]
        ? { item: action.payload, count: 1, totalPrice: action.payload.price }
        : {
            ...state.items[currentId],
            count: state.items[currentId].count + 1,
            totalPrice:
              action.payload.price * (state.items[currentId].count + 1),
          };
      const newItems = {
        ...state.items,
        [action.payload.id]: currentPizzaItem,
      };

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice + currentPizzaItem.item.price,
        totalCount: state.totalCount + 1,
      };
    }
    case "REMOVE_CART_ITEM": {
      const currentItem = state.items[action.payload];
      const newItems = Object.assign({}, state.items);
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount - currentItem.count,
        totalPrice: state.totalPrice - currentItem.totalPrice,
      };
    }
    case "RESET_CART": {
      return initialState;
    }
    case "CART_ITEM_COUNT_INC": {
      const currentPizzaItem = state.items[action.payload];

      const newItems = {
        ...state.items,
        [action.payload]: {
          ...currentPizzaItem,
          count: currentPizzaItem.count + 1,
          totalPrice: currentPizzaItem.totalPrice + currentPizzaItem.item.price,
        },
      };

      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + currentPizzaItem.item.price,
      };
    }
    case "CART_ITEM_COUNT_DEC": {
      const currentPizzaItem = state.items[action.payload];

      const newItems = {
        ...state.items,
        [action.payload]: {
          ...currentPizzaItem,
          count: currentPizzaItem.count - 1,
          totalPrice: currentPizzaItem.totalPrice - currentPizzaItem.item.price,
        },
      };

      if (currentPizzaItem.count <= 1) {
        delete newItems[action.payload];
      }

      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount - 1,
        totalPrice: state.totalPrice - currentPizzaItem.item.price,
      };
    }
    default:
      return state;
      break;
  }
};

export default cart;
