import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Home, Cart, PageNotFound, Order } from "./pages";
import { Header, Modals } from "./components";

import "./index.css";
function App() {
  useEffect(() => {}, []);

  return (
    <div className="wrapper">
      <Modals />
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/order/:id" element={<Order />} />
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
