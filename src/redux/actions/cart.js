import { checkoutOrder } from "../../services/order.service";

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

export const checkoutCart = (number) => async (dispatch, getState) => {
  const state = getState();
  const items = Object.values(state.cart.items);
  const orderList = items.map(({ item, count }) => ({
    pizzaID: item.id,
    count,
    props: `${item.selectedProps.type} ${item.selectedProps.id}`,
  }));

  try {
    await checkoutOrder(number, orderList);
    dispatch(resetCart());
  } catch (error) {
    dispatch(resetCart());
  }
};
