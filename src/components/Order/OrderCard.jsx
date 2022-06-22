import classNames from "classnames";
import React, { useState } from "react";
import { formatDate } from "../../utils/helpers";
import CartItem from "../Cart/CartItem";
import { Button } from "../ui";
import OrderCardItem from "./OrderCardItem";

const OrderCard = ({
	className,
	id,
	status,
	createdAt,
	pizzas,
	totalOrderPrice,
}) => {
	const date = new Date(createdAt);
	const [orderCartActive, setOrderCartActive] = useState(false);

	const orderCartClick = () => {
		setOrderCartActive(!orderCartActive);
	};

	return (
		<div
			className={classNames("order-card", {
				"order-card--active": orderCartActive,
			})}
			onClick={orderCartClick}
		>
			<div className={"order-cart__info " + className}>
				<div className="order-cart__item">
					<span className="text">id: {id}</span>
				</div>
				<div className="order-cart__item">
					<span className="text">{pizzas.length} pieces</span>
				</div>
				<div className="order-cart__item order-cart__item--price">
					<span className="text">{totalOrderPrice}$</span>
				</div>
				<div className="order-cart__item order-card__item--status">
					<span className="text">{status}</span>
				</div>
				<div className="order-cart__item order-cart__item--date">
					<span className="text">{formatDate(date)}</span>
				</div>
			</div>
			<div className="order-cart__dropdown">
				<div className="order-cart__dropdown-items">
					{pizzas.map((pizza) => (
						<OrderCardItem key={pizza.id} {...pizza} />
					))}
				</div>
			</div>
		</div>
	);
};

export default OrderCard;
