export const addCartItem = (item) => {
  return {
    type: "ADD_CART_ITEM",
    payload: item,
  };
};

export const removeCartItem = (id) => {
  return {
    type: "REMOVE_CART_ITEM",
    payload: id,
  };
};

export const resetCart = () => {
  return {
    type: "RESET_CART",
  };
};

export const cartItemCountInc = (id) => {
  return {
    type: "CART_ITEM_COUNT_INC",
    payload: id,
  };
};

export const cartItemCountDec = (id) => {
  return {
    type: "CART_ITEM_COUNT_DEC",
    payload: id,
  };
};
