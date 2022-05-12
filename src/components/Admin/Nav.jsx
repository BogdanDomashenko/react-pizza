import React, { useState } from "react";
import { Navbar } from "../ui";

const Nav = () => {
  const [activeItem, setActiveItem] = useState("Orders");
  const items = ["Orders", "Products"];

  return (
    <div>
      <Navbar
        items={items}
        activeItem={activeItem}
        onItemClick={setActiveItem}
      />
    </div>
  );
};

export default Nav;
