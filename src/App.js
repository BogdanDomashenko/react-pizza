import React from "react";
import { Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { connect } from "react-redux";
import { setPizzas as setPizzasAction } from "./redux/actions/pizzas";

import { Home, Cart, PageNotFound } from "./pages";
import { Header } from "./components";

import "./index.css";
import axios from "axios";

function App({ items, setPizzas }) {
  React.useEffect(() => {
    axios.get("./db.json").then((response) => {
      setPizzas(response.data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home items={items} />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
