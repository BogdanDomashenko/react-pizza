import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminDashboard, LoginForm } from "../components";
import { resetPizzas } from "../redux/actions/pizzas";
import { ROLES } from "../utils/constants";

const Admin = () => {
  const dispatch = useDispatch();
  const { role: userRole } = useSelector((state) => state.user);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    dispatch(resetPizzas());
  }, []);

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
