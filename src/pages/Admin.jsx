import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LoginForm } from "../components";
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
      <div className="content">
        <div className="container">
          {isAllowed ? <div>djddj</div> : <LoginForm />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
