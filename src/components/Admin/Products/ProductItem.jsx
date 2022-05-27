import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deletePizza, updatePizza } from "../../../redux/actions/admin";
import { Button, Input } from "../../ui";

const ProductItem = ({ id, name, imageUrl, price, category, rating }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const formik = useFormik({
    initialValues: {
      name: name,
      imageUrl: imageUrl,
      price: price,
      category: category,
      rating: rating,
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(updatePizza(id, values));
      toggleIsEditing();
      resetForm();
    },
  });

  useEffect(() => {
    if (!isEditing) {
      formik.resetForm();
    }
  }, [isEditing]);

  const onDeletePizza = () => {
    dispatch(deletePizza(id));
  };

  return !isEditing ? (
    <tr className="product">
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <img alt={name} className="product__img" src={imageUrl} />
      </td>
      <td>{price}$</td>
      <td>{category}</td>
      <td>{rating}</td>
      <td className="table__button">
        <Button className="button--default" onClick={toggleIsEditing}>
          Edit
        </Button>
      </td>
      <td>
        <Button
          className="button--defaul button--light"
          onClick={onDeletePizza}
        >
          Delete
        </Button>
      </td>
    </tr>
  ) : (
    <tr className="product">
      <td>{id}</td>
      <td>
        <Input
          label="Name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </td>
      <td>
        <Input
          label="Image url"
          name="imageUrl"
          onChange={formik.handleChange}
          value={formik.values.imageUrl}
        />
      </td>
      <td>
        <Input
          label="Price"
          type="number"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
      </td>
      <td>
        <Input
          label="Category"
          type="number"
          name="category"
          onChange={formik.handleChange}
          value={formik.values.category}
        />
      </td>
      <td>
        <Input
          label="Rating"
          type="number"
          name="rating"
          onChange={formik.handleChange}
          value={formik.values.rating}
        />
      </td>
      <td className="table__button">
        <Button
          className="button--default button--light"
          onClick={toggleIsEditing}
        >
          Cancel
        </Button>
        <Button className="button--default" onClick={formik.handleSubmit}>
          Update
        </Button>
      </td>
      <td>
        <Button
          className="button--defaul button--light"
          onClick={onDeletePizza}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ProductItem;
