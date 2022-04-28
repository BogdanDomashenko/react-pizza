import { combineReducers } from "redux";

import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";
import cartReducar from "./cart";

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  cart: cartReducar,
});

export default rootReducer;
