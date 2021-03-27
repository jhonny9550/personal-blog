import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ROUTE_NAMES from "../config/routes";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import backgroundImage from "../assets/images/home-background.jpg";
import Signup from "../pages/Signup";

const HomeLayout: React.FC = ({ children }) => (
  <div
    style={{ backgroundImage: `url(${backgroundImage})` }}
    className="h-full w-full bg-cover bg-no-repeat bg-center"
  >
    {children}
  </div>
);

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <HomeLayout>
        <Home />
      </HomeLayout>
    </Route>
    <Route exact path="/signin">
      <HomeLayout>
        <Signin />
      </HomeLayout>
    </Route>
    <Route exact path="/signup">
      <HomeLayout>
        <Signup />
      </HomeLayout>
    </Route>
    <Route path="/404">Page not found</Route>
    <Route path="*">
      <Redirect to={ROUTE_NAMES.NOT_FOUND} />
    </Route>
  </Switch>
);

export default Routes;
