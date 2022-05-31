import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/pizza-logo.svg";
import { logout } from "../redux/actions/user";
import { ROLES } from "../utils/constants";
import { CartIcon } from "./ui";
import Button from "./ui/Button";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role: userRole } = useSelector((state) => state.user);
  const { totalPrice, totalCount } = useSelector((state) => state.cart);

  const onLogoutClick = () => {
    dispatch(logout());
  };

  const onAdminClick = () => {
    navigate("/admin/orders");
  };

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
          {userRole === ROLES.admin ? (
            <div className="header__button">
              <Button
                className="header__logout-btn button--default button--light"
                onClick={onAdminClick}
              >
                <span>Admin</span>
              </Button>
            </div>
          ) : (
            ""
          )}
          {userRole !== ROLES.phantom ? (
            <div className="header__button">
              <Button
                className="header__logout-btn button--default button--light"
                onClick={onLogoutClick}
              >
                <span>Logout</span>
              </Button>
            </div>
          ) : (
            ""
          )}
          <div className="header__button">
            <Link to="/cart">
              <Button className="button--cart button--orange">
                <span>{totalPrice} $</span>
                <div className="button__delimiter"></div>
                <CartIcon />
                <span>{totalCount}</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
