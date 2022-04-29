import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useSortedPizzas from "./useSortedPizzas";

const usePizzas = () => {
  const [pizzas, setPizzas] = useState(null);
  const sortedPizzas = useSortedPizzas();
  const { category } = useSelector(({ filters }) => filters);

  useEffect(() => {
    if (category && sortedPizzas) {
      setPizzas(sortedPizzas.filter((pizza) => pizza.category === category));
    } else {
      setPizzas(sortedPizzas);
    }
  }, [sortedPizzas]);

  return pizzas;
};

export default usePizzas;
