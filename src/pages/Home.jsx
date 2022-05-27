import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Categories,
  Pagination,
  PizzaBlock,
  PizzaLoadingBlock,
  SortPopup,
} from "../components";
import { useCategories, useCategory, usePagination, usePizzas } from "../hooks";
import { addCartItem } from "../redux/actions/cart";
import { setSortBy } from "../redux/actions/filters";

const Home = () => {
  const dispatch = useDispatch();

  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { sortBy } = useSelector(({ filters }) => filters);
  const { items: cartItems } = useSelector((state) => state.cart);
  const { selectedFields } = useSelector((state) => state.pizzas);
  const { totalCount } = useSelector(({ pizzas }) => pizzas.items);

  const [categoryNames, setCategoryNames] = useState();
  const categories = useCategories();
  const [category, setCategory] = useCategory();

  const pagination = usePagination(0, totalCount, 10);

  const pizzas = usePizzas(pagination.page, pagination.rowsPerPage);

  useEffect(() => {
    console.log(pizzas);
  }, [pizzas]);

  useEffect(() => {
    setCategoryNames(categories.map((category) => category.name));
  }, [categories]);

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
      {
        <div className="content__items">
          {isLoaded && pizzas.length
            ? pizzas.map((item, index) => (
                <PizzaBlock
                  key={index}
                  cartCount={cartItems[item.id] ? cartItems[item.id].count : 0}
                  {...item}
                  onAddToCart={() => onAddItemToCart(item)}
                />
              ))
            : Array(pizzas.length)
                .fill()
                .map((_, index) => <PizzaLoadingBlock key={index} />)}
        </div>
      }
      {totalCount ? <Pagination {...pagination} /> : ""}
    </div>
  );
};

export default Home;
