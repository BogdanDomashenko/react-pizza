import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../../hooks/useInput";
import { setAdminPizzaItem } from "../../../redux/actions/admin";
import { updatePizzaQuery } from "../../../services/admin.service";
import { Button, Input } from "../../ui";

const ProductItem = ({ id, name, imageUrl, price, category, rating }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const nameInp = useInput(name);
  const imageUrlInp = useInput(imageUrl);
  const priceInp = useInput(price);
  const ratingInp = useInput(rating);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const onUpdateClick = async () => {
    const pizza = {
      name: nameInp.value,
      imageUrl: imageUrlInp.value,
      price: priceInp.value,
      category,
      rating: ratingInp.value,
    };

    dispatch(setAdminPizzaItem(id, pizza));
    await updatePizzaQuery({ id, ...pizza });
    toggleIsEditing();
  };

  return !isEditing ? (
    <tr className="product">
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <img className="product__img" src={imageUrl} />
      </td>
      <td>{price}$</td>
      <td>{category}</td>
      <td>{rating}</td>
      <td className="table__button">
        <Button className="button--default" onClick={toggleIsEditing}>
          Edit
        </Button>
      </td>
    </tr>
  ) : (
    <tr className="product">
      <td>{id}</td>
      <td>
        <Input {...nameInp} />
      </td>
      <td>
        <Input {...imageUrlInp} />
      </td>
      <td>
        <Input {...priceInp} />
      </td>
      <td>{category}</td>
      <td>
        <Input {...ratingInp} />
      </td>
      <td className="table__button">
        <Button
          className="button--default button--light"
          onClick={toggleIsEditing}
        >
          Cancel
        </Button>
        <Button className="button--default" onClick={onUpdateClick}>
          Update
        </Button>
      </td>
    </tr>
  );
};

export default ProductItem;
