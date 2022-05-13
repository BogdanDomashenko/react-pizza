import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/admin";
import { ORDER_STATUSES } from "../../utils/constants";
import Order from "../Order/Order";
import { Button, SelectPopup } from "../ui";

const Orders = () => {
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.admin);

  const statusesList = Object.values(ORDER_STATUSES);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const onSelectStatus = () => {};

  return (
    <table className="table orders-table">
      <thead>
        <tr>
          <th>id</th>
          <th>user id</th>
          <th>phone</th>
          <th>count</th>
          <th>price</th>
          <th>status</th>
          <th>date</th>
          <th>View</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <Order
            key={order.id}
            id={order.id}
            user={order.user}
            count={order.pizzas.length}
            status={order.status}
            date={order.createdAt}
            price={order.totalOrderPrice}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Orders;
