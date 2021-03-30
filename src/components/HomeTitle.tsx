import React from "react";
import { Link } from "react-router-dom";
import ROUTE_NAMES from "../config/routes";

const HomeTitle = () => {
  return (
    <div className="text-center sm:text-left py-12">
      <Link to={ROUTE_NAMES.HOME}>
        <h1 className="title text-yellow">Travelcamp</h1>
        <span className="sbody text-white">
          Post your stories. Make new friends.
        </span>
      </Link>
    </div>
  );
};

export default HomeTitle;
