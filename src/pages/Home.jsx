import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categories, PizzaBlock, SortPopup } from "../components";

import { setCategory } from "../redux/actions/filters";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  const onSelectCategory = (index) => {
    dispatch(setCategory(index));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoryNames} />
        <SortPopup
          items={[
            { name: "популярности", type: "popular" },
            { name: "цена", type: "price" },
            { name: "алфавит", type: "alphabet" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.length > 0 && items.map((item) => <PizzaBlock {...item} />)}
      </div>
    </div>
  );
}

export default Home;
