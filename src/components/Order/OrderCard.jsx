import classNames from "classnames";
import React, {useState} from "react";
import OrderCardItem from "./OrderCardItem";
import {useLocale} from "../../hooks";

const OrderCard = ({
	                   className,
	                   id,
	                   status,
	                   createdAt,
	                   pizzaOrders,
	                   totalOrderPrice,
                   }) => {
	const date = new Date(createdAt);
	const locale = useLocale();
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
					<span className="text">{pizzaOrders.length} pieces</span>
				</div>
				<div className="order-cart__item order-cart__item--price">
					<span className="text">{totalOrderPrice}$</span>
				</div>
				<div className="order-cart__item order-card__item--status">
					<span className="text">{status}</span>
				</div>
				<div className="order-cart__item order-cart__item--date">
					<span className="text">{date.toLocaleString(locale)}</span>
				</div>
			</div>
			<div className="order-cart__dropdown">
				<div className="order-cart__dropdown-items">
					{pizzaOrders.map((pizza) => (
						<OrderCardItem key={pizza.id + "_" + pizza.props} {...pizza} />
					))}
				</div>
			</div>
		</div>
	);
};

export default OrderCard;
