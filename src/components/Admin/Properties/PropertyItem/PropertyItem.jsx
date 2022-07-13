import React, { useState } from "react";
import PropertyItemForm from "./PropertyItemForm";
import { Button } from "../../../ui";

const PropertyItem = ({ properties, onChangeIssetItem, onAddItem }) => {
	const [addFormVisible, setAddFormVisible] = useState(false);

	const addButtonClick = () => {
		setAddFormVisible(true);
	};

	const addItemHandler = (value) => {
		onAddItem(value);
		setAddFormVisible(false);
	};

	return (
		<div className="properties__item">
			{properties.map((item) => (
				<div className="properties__column" key={item.id}>
					<PropertyItemForm
						{...item}
						buttonName="Update"
						onSubmit={onChangeIssetItem}
					/>
				</div>
			))}
			<div className="properties__column properties__add">
				{addFormVisible ? (
					<PropertyItemForm
						id={properties.length}
						name=""
						price=""
						buttonName="Add"
						onSubmit={addItemHandler}
					/>
				) : (
					<Button className="button--default" onClick={addButtonClick}>
						Add
					</Button>
				)}
			</div>
		</div>
	);
};

export default PropertyItem;
