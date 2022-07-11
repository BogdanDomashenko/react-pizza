import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {OrderItem} from "../components";
import {setOrderId} from "../redux/actions/cart";
import {fetchOrder} from "../services/order.service";

const Order = () => {
	const dispatch = useDispatch();
	
	const {id} = useParams();
	const {orderId} = useSelector((state) => state.cart);
	const [order, setOrder] = useState(null);
	const [error, setError] = useState(null);
	
	useEffect(() => {
		if (orderId) {
			dispatch(setOrderId(null));
		}
	}, [orderId]);
	
	useEffect(async () => {
		try {
			setOrder(await fetchOrder(id));
		} catch (error) {
			setError(error.response.data.message);
		}
	}, []);
	
	return (
		<div className="order wrapper">
			<div className="container container--medium">
				{!error ? (
					order ? (
						<div>
							<div className="order__header">
								<h1>Order #{order.id}</h1>
								<h3>{order.status}</h3>
							</div>
							{order.pizzaOrders.map((item, index) => (
								<OrderItem
									key={index}
									title={item.pizza.name}
									count={item.count}
									price={item.totalPrice}
									img={item.pizza.imageUrl}
									props={item.props}
								/>
							))}
						</div>
					) : (
						""
					)
				) : (
					<h2>{error}</h2>
				)}
			</div>
		</div>
	);
};

export default Order;
