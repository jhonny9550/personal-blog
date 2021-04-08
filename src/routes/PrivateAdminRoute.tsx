import React from "react";
import { useUserContext } from "../contexts/user.context";
import { Route, Redirect, RouteProps } from "react-router-dom";
import ROUTE_NAMES from "../config/routes";
import { USER_ROLES } from "../utils/constants";

/**
 *
 * Custom route guard to prevent not logged users access
 */
const PrivateAdminRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const user = useUserContext();
  if (!user || user.role !== USER_ROLES.ADMIN) {
    return (
      <Redirect
        to={{ pathname: ROUTE_NAMES.SIGN_IN, state: { from: rest.location } }}
      />
    );
  }
  const childrenWithProps = React.cloneElement(
    children as React.ReactElement,
    rest
  );
  return <Route {...rest}>{childrenWithProps}</Route>;
};

export default PrivateAdminRoute;
