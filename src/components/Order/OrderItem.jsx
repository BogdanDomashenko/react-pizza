import React from "react";

const OrderItem = ({ title, count, price, img, props }) => {
  return (
    <div className="order-item">
      <div className="order-item-img">
        <img className="pizza-block__image" src={img} alt="Pizza" />
      </div>
      <div className="order-item-info">
        <h3>{title}</h3>
        <p>{props}</p>
      </div>
      <div className="order-item-count">
        <b>{count}</b>
      </div>
      <div className="order-item-price">
        <b>{price} $</b>
      </div>
    </div>
  );
};

export default OrderItem;
