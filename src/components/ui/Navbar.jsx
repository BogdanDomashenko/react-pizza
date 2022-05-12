import classNames from "classnames";
import React, { useCallback, useState } from "react";
import Button from "./Button";
import { CgMenu } from "react-icons/cg";

const Navbar = ({ items, activeItem, onItemClick }) => {
  const [isNavbarOppened, setIsNavbarOppened] = useState(false);

  const toggleNavbar = useCallback(() => {
    setIsNavbarOppened(!isNavbarOppened);
  });

  const onClick = (item) => {
    toggleNavbar();
    onItemClick(item);
  };

  return (
    <div
      className={classNames("navbar", {
        "navbar--oppened": isNavbarOppened,
      })}
    >
      <Button className="navbar__button button--orange" onClick={toggleNavbar}>
        <span>
          <CgMenu className="burger-icon" />
        </span>
      </Button>
      <ul>
        {items &&
          items.map((item, index) => (
            <li
              className={activeItem === item ? "active" : ""}
              onClick={() => onClick(item)}
              key={`${item}_${index}`}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Navbar;
