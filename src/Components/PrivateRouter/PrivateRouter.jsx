import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserLoginContext } from "../../Hooks/UseContextLogin";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { users } = useContext(UserLoginContext);

  return users?.user?.username ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
