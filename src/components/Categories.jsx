import classNames from "classnames";
import React, { useState } from "react";
import { Button } from "./ui";
//import PropTypes from "prop-types";

const Categories = React.memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  const [isCategoriesOppened, setIsCategoriesOppened] = useState(false);

  const openCategoriesClick = () => {
    setIsCategoriesOppened(!isCategoriesOppened);
  };

  return (
    <div
      className={classNames("categories", {
        "categories--oppened": isCategoriesOppened,
      })}
    >
      <Button
        className="categories__button button--orange"
        onClick={openCategoriesClick}
      >
        <span>Categories</span>
      </Button>
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          All
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onClickCategory(index)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

/* Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.array(),
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
}; */

export default Categories;
