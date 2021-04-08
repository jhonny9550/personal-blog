import React from "react";
import { useUserContext } from "../contexts/user.context";
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from "react-router-dom";
import ROUTE_NAMES from "../config/routes";

export type PublicRouteProps = RouteProps & {
  blockLoggedUsers?: boolean;
} & Partial<RouteComponentProps<{}, any, { from?: string }>>;

/**
 *
 * Custom route guard to prevent logged users access
 */
const PublicRoute: React.FC<PublicRouteProps> = ({
  blockLoggedUsers = false,
  children,
  ...rest
}) => {
  const user = useUserContext();
  if (blockLoggedUsers && user) {
    if (rest.location && rest.location.state && rest.location.state.from) {
      return <Redirect to={rest.location.state.from} />;
    } else {
      return <Redirect to={ROUTE_NAMES.POSTS} />;
    }
  }
  const childrenWithProps = React.cloneElement(
    children as React.ReactElement,
    rest
  );
  return <Route {...rest}>{childrenWithProps}</Route>;
};

export default PublicRoute;
