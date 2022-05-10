import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MODALS } from "../utils/constants";
import { CartItem, ClearCart } from "../components";
import { Button, CartIcon, GoBackIcon } from "../components/ui";
import {
  cartItemCountDec,
  cartItemCountInc,
  removeCartItem,
  resetCart,
} from "../redux/actions/cart";
import { toggleModalVisibility } from "../redux/actions/modals";

function Cart() {
  const dispatch = useDispatch();
  const { items, totalPrice, totalCount } = useSelector((state) => state.cart);
  const itemsValues = Object.values(items);

  const onClearCartClick = () => {
    dispatch(resetCart());
  };

  const onRemoveCartItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const onIncCartItemCount = (id) => {
    dispatch(cartItemCountInc(id));
  };

  const onDecCartItemCount = (id) => {
    dispatch(cartItemCountDec(id));
  };

  const onBuyButtonClick = () => {
    dispatch(toggleModalVisibility(MODALS.СheckoutModal));
  };

  return (
    <div className="wrapper">
      <div className="content">
        <div className="container container--medium">
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                <CartIcon />
                Cart
              </h2>
              {itemsValues.length ? (
                <ClearCart onClick={onClearCartClick} />
              ) : (
                ""
              )}
            </div>
            <div className="content__items">
              {itemsValues.length
                ? itemsValues.map(
                    ({ item, selectedProps, count, totalPrice }) => {
                      const id = `${item.id}_${selectedProps.type}_${selectedProps.size}`;
                      return (
                        <CartItem
                          title={item.name}
                          price={totalPrice}
                          count={count}
                          img={item.imageUrl}
                          onRemove={() => onRemoveCartItem(id)}
                          onIncCount={() => onIncCartItemCount(id)}
                          onDecCount={() => onDecCartItemCount(id)}
                          key={id}
                          selectedProps={selectedProps}
                        />
                      );
                    }
                  )
                : ""}
            </div>
            <div className="cart__bottom">
              {itemsValues.length ? (
                <div>
                  {" "}
                  <div className="cart__bottom-details">
                    <span>
                      {" "}
                      Total count: <b>{totalCount} pieces</b>{" "}
                    </span>
                    <span>
                      {" "}
                      Total price: <b>{totalPrice} $</b>{" "}
                    </span>
                  </div>
                  <div className="cart__bottom-buttons">
                    <Link to="/">
                      {" "}
                      <Button
                        href="/"
                        className="button--outline button--add go-back-btn"
                      >
                        <GoBackIcon />
                        <span>Go back</span>
                      </Button>
                    </Link>
                    <Button className="pay-btn" onClick={onBuyButtonClick}>
                      <span>Checkout</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <h3>Cart is empty</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
