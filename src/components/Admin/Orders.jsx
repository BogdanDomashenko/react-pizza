import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/admin";
import { ORDER_STATUSES } from "../../utils/constants";
import Order from "../Order/Order";
import { Button, SelectPopup } from "../ui";

const Orders = () => {
  const dispatch = useDispatch();
  const [filterStatusName, setFilterStatusName] = useState("All");

  const { orders } = useSelector((state) => state.admin);
  const [filteredOrders, setFilteredOrders] = useState(orders);

  const statusesList = Object.values(ORDER_STATUSES);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  useEffect(() => {
    if (filterStatusName === "All") {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(
        orders.filter((order) => order.status === filterStatusName)
      );
    }
  }, [filterStatusName, orders]);

  const onSelectStatus = (status) => {
    setFilterStatusName(status);
  };

  return (
    <div className="orders">
      <div className="orders__filter">
        <SelectPopup
          label="Status"
          items={["All", ...statusesList]}
          activeItem={filterStatusName}
          onSelectItem={onSelectStatus}
        />
      </div>
      <div className="orders__content">
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
            {filteredOrders.map((order) => (
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
      </div>
    </div>
  );
};

export default Orders;
