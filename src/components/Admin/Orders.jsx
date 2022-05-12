import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/admin";
import Order from "../Order/Order";
import { Button } from "../ui";

const Orders = () => {
  const dispatch = useDispatch();

  const { orders } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

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
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.user.id}</td>
            <td>{order.user.phoneNumber}</td>
            <td>{order.pizzas.length}</td>
            <td>d</td>
            <td>{order.status}</td>
            <td>{order.createdAt}</td>
            <td className="orders-table__button">
              <Button className="button--default">
                <span>Update</span>
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Orders;
