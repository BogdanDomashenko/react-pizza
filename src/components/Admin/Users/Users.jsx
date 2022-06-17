import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { usePagination } from "../../../hooks";
import { getAdminUsers } from "../../../redux/actions/admin";
import { Pagination } from "../../";
import UserItem from "./UserItem";

const Users = () => {
	const dispatch = useDispatch();

	const { users } = useSelector((state) => state.admin);
	const pagination = usePagination(17, 10);

	useEffect(() => {
		dispatch(getAdminUsers());
	}, []);

	const offset = pagination.page * pagination.rowsPerPage;
	const paginatedUsers = [...users].splice(
		offset,
		(pagination.page + 1) * pagination.rowsPerPage
	);

	return (
		<div className="users">
			<div className="users__content">
				<table className="table users-table">
					<thead>
						<tr>
							<th>id</th>
							<th>phone number</th>
							<th>role</th>
							<th>isRegistered</th>
						</tr>
					</thead>
					<tbody>
						{paginatedUsers.length ? (
							paginatedUsers.map((user) => <UserItem key={user.id} {...user} />)
						) : (
							<tr></tr>
						)}
					</tbody>
				</table>
				<Pagination {...pagination} />
			</div>
		</div>
	);
};

export default Users;
