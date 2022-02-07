import React from "react";

import { Categories, PizzaBlock, SortPopup } from "../components";

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => alert(name)}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup items={["популярности", "цена", "алфавит"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.length > 0 && items.map((item) => <PizzaBlock {...item} />)}
      </div>
    </div>
  );
}

export default Home;
