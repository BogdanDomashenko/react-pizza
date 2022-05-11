import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Categories,
  PizzaBlock,
  PizzaLoadingBlock,
  SortPopup,
} from "../components";
import { fetchPizzas } from "../redux/actions/pizzas";

import { setSortBy } from "../redux/actions/filters";
import { useCategory, usePizzas } from "../hooks";
import { addCartItem } from "../redux/actions/cart";

const categoryNames = ["Meat", "Vegetarian", "Grill", "Spicy", "Closed"];

const Home = () => {
  const dispatch = useDispatch();

  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { sortBy } = useSelector(({ filters }) => filters);
  const { items: cartItems } = useSelector((state) => state.cart);
  const { selectedFields } = useSelector((state) => state.pizzas);

  const [category, setCategory] = useCategory();

  const pizzas = usePizzas();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    setCategory(index);
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  });

  const onAddItemToCart = useCallback((item) => {
    dispatch(addCartItem({ item, selectedProps: selectedFields[item.id] }));
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          items={[
            { name: "popular", type: "popular" },
            { name: "price", type: "price" },
            { name: "alphabet", type: "alphabet" },
          ]}
          activeSortType={sortBy}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoaded && pizzas
          ? pizzas.map((item, index) => (
              <PizzaBlock
                key={index}
                cartCount={cartItems[item.id] ? cartItems[item.id].count : 0}
                {...item}
                onAddToCart={() => onAddItemToCart(item)}
              />
            ))
          : Array(12)
              .fill()
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;
