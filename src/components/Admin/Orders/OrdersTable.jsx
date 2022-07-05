import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { usePagination } from "../../../hooks";
import { getOrders } from "../../../redux/actions/admin";
import { ORDER_STATUSES } from "../../../utils/constants";
import { Pagination } from "../../";
import { SelectPopup } from "../../ui";
import Order from "./Order";

const OrdersTable = ({ orders, totalCount, editing }) => {
	const dispatch = useDispatch();
	const [filterStatusName, setFilterStatusName] = useState("All");

	const [filteredOrders, setFilteredOrders] = useState(orders);

	const pagination = usePagination(totalCount, 8);
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
			<div className="orders__content overflow-x-auto">
				<div className="overflow-x-auto">
					<table className="table orders-table">
						<thead>
						<tr>
							<th>id</th>
							{editing && <th>user id</th>}
							{editing && <th>phone</th>}
							<th>count</th>
							<th>price</th>
							<th>status</th>
							<th>date</th>
							<th>View</th>
							{editing ? <th>Update</th> : <th></th>}
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
								editing={editing}
							/>
						))}
						</tbody>
					</table>
				</div>
				{totalCount ? <Pagination {...pagination} /> : ""}
			</div>
		</div>
	);
};

export default OrdersTable;
