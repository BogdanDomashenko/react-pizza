import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/pizza-logo.svg";
import { CartIcon } from "./ui";
import Button from "./ui/Button";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          <Link to="/cart">
            <Button className="button--cart">
              <span>520 ₽</span>
              <div className="button__delimiter"></div>
              <CartIcon />
              <span>3</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
