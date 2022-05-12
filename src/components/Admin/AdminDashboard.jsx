import React from "react";
import Order from "../Order/Order";
import { SearchInput } from "../SearchInput";
import Nav from "./Nav";
import Orders from "./Orders";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Nav />
      <div className="admin-dashboard__content">
        <Orders />
        {/* <Order title="1893178372" count="1" price="10" date="10.11.2022" /> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
