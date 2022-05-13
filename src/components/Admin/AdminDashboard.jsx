import React, { useState } from "react";
import Products from "../Products/Products";
import { SearchInput } from "../SearchInput";
import { Navbar } from "../ui";
import Orders from "./Orders";

const AdminDashboard = () => {
  const [activeINavbartem, setActiveNavbarItem] = useState("Orders");
  const items = ["Orders", "Products"];

  return (
    <div className="admin-dashboard">
      <Navbar
        items={items}
        activeItem={activeINavbartem}
        onItemClick={setActiveNavbarItem}
      />
      <div className="admin-dashboard__content">
        {activeINavbartem === "Orders" && <Orders />}
        {activeINavbartem === "Products" && <Products />}
      </div>
    </div>
  );
};

export default AdminDashboard;
