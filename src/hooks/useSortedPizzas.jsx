import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useSortedPizzas = () => {
  const { sortBy } = useSelector(({ filters }) => filters);
  const items = useSelector(({ pizzas }) => pizzas.items);
  const [sortedItems, setSortedItems] = useState([]);

  useEffect(() => {
    if (items) {
      setSortedItems(
        [...items].sort((a, b) => {
          switch (sortBy) {
            case "popular":
              return b.rating - a.rating;
              break;
            case "price":
              return a.price - b.price;
              break;
            case "alphabet":
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            default:
              return 0;
              break;
          }
        })
      );
    }
  }, [sortBy, items]);

  return sortedItems;
};

export default useSortedPizzas;
