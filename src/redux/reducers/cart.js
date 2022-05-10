const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
  checkoutMessenge: null,
  orderId: null,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM": {
      const currentId =
        action.payload.item.id +
        "_" +
        action.payload.selectedProps.type +
        "_" +
        action.payload.selectedProps.size;
      const currentPizzaItem = !state.items[currentId]
        ? {
            item: action.payload.item,
            selectedProps: action.payload.selectedProps,
            count: 1,
            totalPrice: action.payload.item.price,
          }
        : {
            ...state.items[currentId],
            count: state.items[currentId].count + 1,
            totalPrice:
              action.payload.item.price * (state.items[currentId].count + 1),
          };
      const newItems = {
        ...state.items,
        [currentId]: currentPizzaItem,
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
    case "SET_CHECKOUT_CART_MESSENGE": {
      return {
        ...state,
        checkoutMessenge: action.payload,
      };
    }
    case "SET_ORDER_ID": {
      return {
        ...state,
        orderId: action.payload,
      };
    }
    default:
      return state;
  }
};

export default cart;
