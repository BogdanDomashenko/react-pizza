import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePizzaTypes } from "../../../hooks";
import { usePizzaSizes } from "../../../hooks/usePizzaSizes";
import { getAdminAllStockPizzas } from "../../../redux/actions/admin";
import StockItem from "./StockItem";

const Stock = () => {
  const dispatch = useDispatch();

  const pizzaSizes = usePizzaSizes();
  const pizzaTypes = usePizzaTypes();
  const { stockPizzas } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(getAdminAllStockPizzas());
  }, []);

  return (
    <div className="stock">
      <div className="stock__content">
        <table className="table stock-table">
          <thead>
            <tr>
              <th>available</th>
              <th>id</th>
              <th>name</th>
              <th>available sizes</th>
              <th>available types</th>
            </tr>
          </thead>
          <tbody>
            {stockPizzas &&
              pizzaSizes &&
              pizzaSizes &&
              stockPizzas.map((pizza) => (
                <StockItem
                  key={pizza.id}
                  id={pizza.id}
                  name={pizza.name}
                  sizes={pizzaSizes}
                  types={pizzaTypes}
                  availableSizes={pizza.sizes}
                  availableTypes={pizza.types}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stock;
