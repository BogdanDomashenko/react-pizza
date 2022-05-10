import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { OrderItem } from "../components";
import { setOrderId } from "../redux/actions/cart";
import { fetchOrder } from "../services/order.service";

const Order = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { orderId } = useSelector((state) => state.cart);
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
    <div className="wrapper">
      <div className="content">
        <div className="container container--medium">
          {!error ? (
            order ? (
              <div>
                <h1>Order #{id}</h1>
                {order.pizzas.map((pizza, index) => (
                  <OrderItem
                    key={index}
                    title={pizza.name}
                    count={pizza.pizzaOrders.count}
                    price={pizza.pizzaOrders.totalPrice}
                    img={pizza.imageUrl}
                    props={pizza.pizzaOrders.props}
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
    </div>
  );
};

export default Order;
