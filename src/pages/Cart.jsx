import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem, ClearCart } from "../components";
import { Button, CartIcon, GoBackIcon } from "../components/ui";
import {
  cartItemCountDec,
  cartItemCountInc,
  removeCartItem,
  resetCart,
} from "../redux/actions/cart";

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

  return (
    <div className="wrapper">
      <div className="content">
        <div className="container container--cart">
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                <CartIcon />
                Корзина
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
                      Всего пицц: <b>{totalCount} шт.</b>{" "}
                    </span>
                    <span>
                      {" "}
                      Сумма заказа: <b>{totalPrice} ₽</b>{" "}
                    </span>
                  </div>
                  <div className="cart__bottom-buttons">
                    <Button
                      href="/"
                      className="button--outline button--add go-back-btn"
                    >
                      <GoBackIcon />
                      <span>Вернуться назад</span>
                    </Button>
                    <Button className="pay-btn">
                      <span>Оплатить сейчас</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <h3>Корзина пуста</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

<h1>Корзина</h1>;
