import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import HomeTitle from "../components/HomeTitle";
import ROUTE_NAMES from "../config/routes";

const Home = () => {
  return (
    <div className="mx-72">
      <HomeTitle />
      <div className="h-48"></div>
      <Link to={ROUTE_NAMES.SIGN_UP}>
        <Button className="btn-white block w-72 mt-4">Sign up</Button>
      </Link>
      <Link to={ROUTE_NAMES.SIGN_IN}>
        <Button className="btn-blue block w-72 mt-4">Log in</Button>
      </Link>
    </div>
  );
};

export default Home;
