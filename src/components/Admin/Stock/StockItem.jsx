import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useCheckbox, useInput, usePizzaTypes } from "../../../hooks";
import { usePizzaSizes } from "../../../hooks/usePizzaSizes";
import {
  addAdminPizzaSize,
  addAdminPizzaType,
  removeAdminPizzaSizesTypes,
  removeAdminStockPizzaSize,
  removeAdminStockPizzaType,
  setAdminPizzaSizesTypes,
} from "../../../redux/actions/admin";
import { Checkbox } from "../../ui";

const StockItem = ({
  id,
  name,
  sizes,
  types,
  availableSizes,
  availableTypes,
}) => {
  const dispatch = useDispatch();

  const availableInp = useCheckbox(true);

  const toggleAvailable = (e) => {
    availableInp.toggleChecked();
    console.log(e.target.checked);
    if (!e.target.checked) {
      dispatch(removeAdminPizzaSizesTypes(id));
    } else {
      dispatch(setAdminPizzaSizesTypes(id, types, sizes));
    }
  };

  const onSizesChange = (name, includes) => {
    if (includes) {
      dispatch(removeAdminStockPizzaSize(id, name));
    } else {
      dispatch(addAdminPizzaSize(id, name));
    }
  };
  const onTypesChange = (name, includes) => {
    if (includes) {
      dispatch(removeAdminStockPizzaType(id, name));
    } else {
      dispatch(addAdminPizzaType(id, name));
    }
  };

  return (
    <tr className="stock">
      <td>
        <Checkbox checked={availableInp.checked} onChange={toggleAvailable} />
      </td>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        {sizes.map((size) => {
          const includes = availableSizes.includes(size.name);
          return (
            <div className="stock__checkbox flex flex-center" key={size.id}>
              <Checkbox
                checked={includes}
                onChange={() => onSizesChange(size.name, includes)}
              />
              <span>{size.name}</span>
            </div>
          );
        })}
      </td>
      <td>
        {types.map((type) => {
          const includes = availableTypes.includes(type.name);
          return (
            <div className="stock__checkbox flex flex-center" key={type.id}>
              <Checkbox
                key={type.id}
                checked={includes}
                onChange={() => onTypesChange(type.name, includes)}
              />
              <span>{type.name}</span>
            </div>
          );
        })}
      </td>
    </tr>
  );
};

export default StockItem;
