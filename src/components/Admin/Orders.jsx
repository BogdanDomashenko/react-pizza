import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePagination } from "../../hooks";
import { getOrders } from "../../redux/actions/admin";
import { ORDER_STATUSES } from "../../utils/constants";
import Order from "../Order/Order";
import Pagination from "../Pagination";
import { SelectPopup } from "../ui";

const Orders = () => {
  const dispatch = useDispatch();
  const [filterStatusName, setFilterStatusName] = useState("All");

  const { list: orders, totalCount } = useSelector(
    (state) => state.admin.orders
  );
  const [filteredOrders, setFilteredOrders] = useState(orders);

  const pagination = usePagination(0, totalCount, 8);
  const statusesList = Object.values(ORDER_STATUSES);

  useEffect(() => {
    dispatch(getOrders(pagination.page, pagination.rowsPerPage));
  }, [pagination.page]);

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
        {totalCount ? <Pagination {...pagination} /> : ""}
      </div>
    </div>
  );
};

export default Orders;
