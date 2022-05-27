import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { addPizza } from "../../../redux/actions/admin";
import { Button, Input } from "../../ui";

const AddProduct = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      imageUrl: "",
      price: "",
      category: "",
      rating: "",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(addPizza(values));
      resetForm();
    },
  });

  return (
    <form className="product__add" onSubmit={formik.handleSubmit}>
      <Input
        label="Name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <Input
        label="Image url"
        name="imageUrl"
        onChange={formik.handleChange}
        value={formik.values.imageUrl}
      />
      <Input
        label="Price"
        type="number"
        name="price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      <Input
        label="Category"
        type="number"
        name="category"
        onChange={formik.handleChange}
        value={formik.values.category}
      />
      <Input
        label="Rating"
        type="number"
        name="rating"
        onChange={formik.handleChange}
        value={formik.values.rating}
      />
      <Button className="button--default" type="submit">
        Add
      </Button>
    </form>
  );
};

export default AddProduct;
