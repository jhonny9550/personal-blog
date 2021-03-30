import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import HomeTitle from "../components/HomeTitle";
import ROUTE_NAMES from "../config/routes";

const Home = () => {
  return (
    <div className="flex flex-col items-center mx-6 h-full sm:mx-72 sm:block">
      <HomeTitle />
      <div className="flex-grow sm:h-48"></div>
      <div className="text-center mb-8 sm:text-left">
        <Link className="block" to={ROUTE_NAMES.SIGN_UP}>
          <Button className="btn-white block w-72">Sign up</Button>
        </Link>
        <Link className="block" to={ROUTE_NAMES.SIGN_IN}>
          <Button className="btn-blue block w-72 mt-4">Log in</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
