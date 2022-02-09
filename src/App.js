import React from "react";
import { Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { useDispatch } from "react-redux";
import { setPizzas } from "./redux/actions/pizzas";

import { Home, Cart, PageNotFound } from "./pages";
import { Header } from "./components";

import "./index.css";
import axios from "axios";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("./db.json").then((response) => {
      dispatch(setPizzas(response.data.pizzas));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
