import React from "react";
import PropertyItem from "./PropertyItem/PropertyItem";
import { useDispatch, useSelector } from "react-redux";
import {
	addPizzaSizeAdmin,
	setAdminPizzaSize,
} from "../../../redux/actions/admin";

const Sizes = () => {
	const dispatch = useDispatch();

	const { sizes } = useSelector((state) => state.pizzas);

	const onChangeSize = async (size) => {
		dispatch(setAdminPizzaSize(size));
	};

	const onAddSize = async (size) => {
		dispatch(addPizzaSizeAdmin(size));
	};

	return sizes.length ? (
		<div className="admin-properties__item">
			<h2>Sizes</h2>
			<PropertyItem
				properties={sizes}
				onChangeIssetItem={onChangeSize}
				onAddItem={onAddSize}
			/>
		</div>
	) : (
		""
	);
};

export default Sizes;
