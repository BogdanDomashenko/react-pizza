import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminPizzas } from "../../../redux/actions/admin";
import AddProduct from "./AddProduct";
import ProductItem from "./ProductItem";

const Products = () => {
  const dispatch = useDispatch();

  const { pizzas } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAdminPizzas());
  }, []);

  return (
    <div className="products">
      <div className="products__content">
        <table className="table products-table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>imageUrl</th>
              <th>price</th>
              <th>category</th>
              <th>rating</th>
              <th>action</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {pizzas &&
              pizzas.map((pizza) => <ProductItem key={pizza.id} {...pizza} />)}
          </tbody>
        </table>
        <AddProduct />
      </div>
    </div>
  );
};

export default Products;
