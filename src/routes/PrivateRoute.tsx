import React from "react";
import { useUserContext } from "../contexts/user.context";
import { Route, Redirect, RouteProps } from "react-router-dom";
import ROUTE_NAMES from "../config/routes";

/**
 *
 * Custom route guard to prevent not logged users access
 */
const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const user = useUserContext();
  if (!user) {
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

export default PrivateRoute;
