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

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

function Home() {
  const dispatch = useDispatch();

  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { sortBy } = useSelector(({ filters }) => filters);
  const [category, setCategory] = useCategory();

  const pizzas = usePizzas();

  useEffect(() => {
    dispatch(fetchPizzas());
  }, [category]);

  const onSelectCategory = useCallback((index) => {
    setCategory(index);
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  });

  const onAddItemToCart = useCallback((item) => {
    dispatch(addCartItem(item));
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
            { name: "популярности", type: "popular" },
            { name: "цена", type: "price" },
            { name: "алфавит", type: "alphabet" },
          ]}
          activeSortType={sortBy}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((item, index) => (
              <PizzaBlock
                key={index}
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
}

export default Home;
