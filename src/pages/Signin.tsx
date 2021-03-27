import React from "react";
import HomeTitle from "../components/HomeTitle";
import TextInput from "../components/TextInput";

const Signin = () => {
  return (
    <div className="mx-72">
      <HomeTitle />
      <div className="bg-white p-4 rounded-md shadow-md max-w-xs">
        <TextInput id="email" label="Email" type="text" />
        <TextInput
          id="password"
          label="Password"
          type="password"
          className="mt-2"
        />
        <button className="btn-blue btn-large mt-4">Log in</button>
      </div>
    </div>
  );
};

export default Signin;
