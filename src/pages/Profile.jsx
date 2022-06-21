import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OrderCard, OrdersTable } from "../components";
import { usePagination, useUserData } from "../hooks";
import { getUserOrders } from "../redux/actions/user";

const Profile = () => {
	const dispatch = useDispatch();
	const { list, totalCount } = useSelector((state) => state.user.orders);
	const pagination = usePagination(totalCount, 8);
	const user = useUserData();

	useEffect(() => {
		dispatch(getUserOrders(pagination.page, pagination.rowsPerPage));
	}, []);

	return (
		<div className="container profile">
			<h2>Phone number: {user.phoneNumber}</h2>
			<div className="profile__orders">
				{/* 				{list.length ? (
					<OrdersTable orders={list} totalCount={totalCount} editing={false} />
				) : (
					""
				)} */}
				{list.length
					? list.map((item) => {
							console.log(item);
							return (
								<OrderCard className="orders__item" key={item.id} {...item} />
							);
					  })
					: ""}
			</div>
		</div>
	);
};

export default Profile;
