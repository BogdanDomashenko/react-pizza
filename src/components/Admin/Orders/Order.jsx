import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ORDER_STATUSES } from "../../../utils/constants";
import { setOrderStatus, updateOrder } from "../../../redux/actions/admin";
import { Button, SelectPopup } from "../../ui";
import {useLocale} from "../../../hooks";

const statusesList = Object.values(ORDER_STATUSES);

const Order = ({ id, user, count, status, date, price, editing }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const locale = useLocale();

	const parsedDate = new Date(date);
	const [selectedStatus, setSelectedStatus] = useState(status);

	const onSelectStatus = (status) => {
		setSelectedStatus(status);
		dispatch(setOrderStatus(id, status));
	};

	const onViewClick = () => {
		navigate("/order/" + id);
	};

	const onUpdateClick = () => {
		dispatch(updateOrder(id));
	};

	return (
		<tr key={id}>
			<td>{id}</td>
			{editing && <td>{user && user.id}</td>}
			{editing && <td>{user && user.phoneNumber}</td>}
			<td>{count}</td>
			<td>{price}$</td>
			<td>
				{editing ? (
					<SelectPopup
						items={statusesList}
						activeItem={selectedStatus}
						onSelectItem={onSelectStatus}
					/>
				) : (
					selectedStatus
				)}
			</td>
			<td>{parsedDate.toLocaleString(locale)}</td>
			<td className="orders-table__button">
				<Button
					className="button--default button--default"
					onClick={onViewClick}
				>
					<span>View</span>
				</Button>
			</td>
			{editing ? (
				<td className="orders-table__button">
					<Button className="button--default" onClick={onUpdateClick}>
						<span>Update</span>
					</Button>
				</td>
			) : (
				<td></td>
			)}
		</tr>
	);
};

export default Order;
