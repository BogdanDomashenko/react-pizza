import { combineReducers } from "redux";

import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";
import cartReducar from "./cart";
import modalsReducer from "./modals";

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  cart: cartReducar,
  modals: modalsReducer,
});

export default rootReducer;
