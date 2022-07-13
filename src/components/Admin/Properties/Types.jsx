import React from "react";
import PropertyItem from "./PropertyItem/PropertyItem";
import { useDispatch, useSelector } from "react-redux";
import {
	addPizzaTypeAdmin,
	setAdminPizzaSize,
} from "../../../redux/actions/admin";

const Types = () => {
	const dispatch = useDispatch();

	const { types } = useSelector((state) => state.pizzas);

	const onChangeType = (types) => {
		dispatch(setAdminPizzaSize(types));
	};

	const onAddType = (type) => {
		dispatch(addPizzaTypeAdmin(type));
	};

	return types.length ? (
		<div className="admin-properties__item">
			<h2>Types</h2>
			<PropertyItem
				properties={types}
				onChangeIssetItem={onChangeType}
				onAddItem={onAddType}
			/>
		</div>
	) : (
		""
	);
};

export default Types;
