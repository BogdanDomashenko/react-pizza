import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useCheckbox} from "../../../hooks";
import {
    setPizzaAvailable,
    setPizzaNotAvailable,
    setPizzaSizeAvailable,
    setPizzaTypeAvailable,
} from "../../../redux/actions/admin";
import {Checkbox} from "../../ui";

const StockItem = ({
                       id,
                       name,
                       sizes,
                       types,
                       availableSizes,
                       availableTypes,
                   }) => {
    const dispatch = useDispatch();

    const isAllChecked =
        availableSizes.length === sizes.length &&
        availableTypes.length === types.length;
    const availableInp = useCheckbox(isAllChecked);

    useEffect(() => {
        if (isAllChecked) {
            !availableInp.checked && availableInp.toggleChecked();
        } else {
            availableInp.checked && availableInp.toggleChecked();
        }
    }, [availableSizes, availableTypes]);

    const toggleAvailable = (e) => {
        availableInp.toggleChecked();
        if (e.target.checked) {
            dispatch(setPizzaAvailable(id, types, sizes));
        } else {
            dispatch(setPizzaNotAvailable(id));
        }
    };

    const onSizesChange = (sizeID, name, includes) => {
        dispatch(setPizzaSizeAvailable(id, name, sizeID, includes));
    };
    const onTypesChange = (typeID, name, includes) => {
        dispatch(setPizzaTypeAvailable(id, name, typeID, includes));
    };

    return (
        <tr className="stock">
            <td>
                <Checkbox checked={availableInp.checked} onChange={toggleAvailable}/>
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
                                onChange={() => onSizesChange(size.id, size.name, includes)}
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
                                onChange={() => onTypesChange(type.id, type.name, includes)}
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
