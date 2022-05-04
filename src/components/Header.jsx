import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../assets/img/pizza-logo.svg";
import { CartIcon } from "./ui";
import Button from "./ui/Button";

const Header = () => {
  const { totalPrice, totalCount } = useSelector((state) => state.cart);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>the most delicious pizza in the universe</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart">
            <Button className="button--orange">
              <span>{totalPrice} $</span>
              <div className="button__delimiter"></div>
              <CartIcon />
              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
