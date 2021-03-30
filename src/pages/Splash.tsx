import React from "react";
import backgroundImage from "../assets/images/home-background.jpg";

const Splash = () => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="h-full w-full flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center"
    >
      <h1 className="title text-yellow animate-bounce">Travelcamp</h1>
      <span className="sbody text-white">
        Post your stories. Make new friends.
      </span>
    </div>
  );
};

export default Splash;
