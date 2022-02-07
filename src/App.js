import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Cart, PageNotFound } from "./pages";
import { Header } from "./components";

import "./index.css";

function App() {
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

export default App;
