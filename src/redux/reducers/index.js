import { combineReducers } from "redux";

import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";
import cartReducar from "./cart";
import modalsReducer from "./modals";
import userReducer from "./user";

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  cart: cartReducar,
  modals: modalsReducer,
  user: userReducer,
});

export default rootReducer;
