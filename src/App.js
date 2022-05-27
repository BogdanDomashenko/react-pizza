import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Modals } from "./components";
import "./index.css";
import { Admin, Cart, Home, Order, PageNotFound } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Modals />
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/order/:id" element={<Order />} />
          <Route exact path="/admin" element={<Admin />} />
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
