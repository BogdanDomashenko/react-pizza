import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../ui";
import Orders from "./Orders";
import Products from "./Products/Products";
import Stock from "./Stock/Stock";

const AdminDashboard = () => {
  const { error } = useSelector((state) => state.admin);
  const items = ["Orders", "Products", "Stock"];
  const [activeINavbartem, setActiveNavbarItem] = useState(items[0]);

  return (
    <div className="admin-dashboard">
      <Navbar
        items={items}
        activeItem={activeINavbartem}
        onItemClick={setActiveNavbarItem}
      />
      {error && (
        <div className="admin-dashboard__message">
          <span className="error">{error}</span>
        </div>
      )}

      <div className="admin-dashboard__content overflow-x-auto">
        {activeINavbartem === items[0] && <Orders />}
        {activeINavbartem === items[1] && <Products />}
        {activeINavbartem === items[2] && <Stock />}
      </div>
    </div>
  );
};

export default AdminDashboard;
