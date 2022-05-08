import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartItem, CheckoutModal, ClearCart } from "../components";
import { Button, CartIcon, GoBackIcon } from "../components/ui";
import {
  cartItemCountDec,
  cartItemCountInc,
  checkoutCart,
  removeCartItem,
  resetCart,
} from "../redux/actions/cart";
import { fetchOrder } from "../services/order.service";

function Cart() {
  const dispatch = useDispatch();
  const { items, totalPrice, totalCount } = useSelector((state) => state.cart);
  const [checkoutModalVisible, setCheckoutModalVisible] = useState(false);
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
    setCheckoutModalVisible(true);
  };

  return (
    <div className="wrapper">
      <CheckoutModal
        visible={checkoutModalVisible}
        setVisible={setCheckoutModalVisible}
      />
      <div className="content">
        <div className="container container--cart">
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
                ? itemsValues.map(({ item, count, totalPrice }) => (
                    <CartItem
                      title={item.name}
                      price={totalPrice}
                      count={count}
                      img={item.imageUrl}
                      onRemove={() => onRemoveCartItem(item.id)}
                      onIncCount={() => onIncCartItemCount(item.id)}
                      onDecCount={() => onDecCartItemCount(item.id)}
                      key={item.id}
                      selectedProps={item.selectedProps}
                    />
                  ))
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
