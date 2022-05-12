import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AdminDashboard, LoginForm } from "../components";
import { ROLES } from "../utils/constants";

const Admin = () => {
  const { role: userRole } = useSelector((state) => state.user);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    if (userRole === ROLES.admin) {
      setIsAllowed(true);
    } else {
      setIsAllowed(false);
    }
  }, [userRole]);

  return (
    <div className="wrapper">
      <div>
        <div className="container">
          {isAllowed ? <AdminDashboard /> : <LoginForm />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
