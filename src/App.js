import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Cart, PageNotFound } from "./pages";
import { Header } from "./components";

import "./index.css";
import axios from "axios";

function App() {
  const [pizzas, setPizzas] = React.useState([]);

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
          <Route exact path="/" element={<Home items={pizzas} />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
