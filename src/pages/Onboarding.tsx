import React from "react";
import { useUserContext } from "../contexts/user.context";
import onboarding1 from "../assets/images/onboarding_1.jpg";
import { Plus } from "react-feather";

const Onboarding: React.FC = ({ children }) => {
  const user = useUserContext();
  if (user && !user.onboarding)
    return (
      <div className="h-full p-4">
        <div className="rounded-md bg-white shadow-md max-w-md sm:max-w-xl mx-auto px-36 py-8">
          <div className="w-full text-center relative py-8">
            <div className="flex justify-center">
              <span className="slider-bullet slider-bullet-active"></span>
              <span className="slider-bullet"></span>
              <span className="slider-bullet"></span>
            </div>
            <button className="btn text-gray-300 absolute top-4 right-0">
              Skip
            </button>
          </div>
          <div className="relative">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src={onboarding1} alt="Add trips" />
            </div>
            <button className="btn btn-blue btn-fab btn-fab-small absolute onboarding-fab-btn">
              <Plus />
            </button>
          </div>
          <div className="text-center my-8">
            <h1 className="subtitle">Add trips</h1>
            <p className="sbody mt-2">
              Easily add your create your trip, and let people know where you're
              heading.
            </p>
            <button className="btn btn-blue-outlined px-6 py-1 rounded-3xl mt-8">
              Next
            </button>
          </div>
        </div>
      </div>
    );
  return <>{children}</>;
};

export default Onboarding;
