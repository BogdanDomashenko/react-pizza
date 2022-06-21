import React from "react";

const OrderCardItem = ({
	imageUrl,
	name,
	pizzaOrders,
	pizzaOrders: { props, totalPrice, count },
}) => {
	return (
		<div className="order-cart-item">
			<div className="order-cart-item__item order-cart-item__img">
				<img src={imageUrl} alt={name} className="pizza-block__image" />
			</div>
			<div className="order-cart-item__item order-cart-item__details">
				<h3>{name}</h3>
				<span>{props}</span>
			</div>
			<div className="order-cart-item__item order-cart-item__count">
				<h3>{count}</h3>
			</div>
			<div className="order-cart-item__item order-cart-item__price">
				<h3>{totalPrice}$</h3>
			</div>
		</div>
	);
};

export default OrderCardItem;
