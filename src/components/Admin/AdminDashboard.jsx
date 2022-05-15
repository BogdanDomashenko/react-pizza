import React, { useState } from "react";
import { SearchInput } from "../SearchInput";
import { Navbar } from "../ui";
import Orders from "./Orders";
import Products from "./Products/Products";

const AdminDashboard = () => {
  const [activeINavbartem, setActiveNavbarItem] = useState("Products");
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
