import React, { useCallback, useState } from "react";
import { Eye, EyeOff } from "react-feather";
import Button from "../components/Button";
import HomeTitle from "../components/HomeTitle";
import TextInput from "../components/TextInput";
import { ReactComponent as Google } from "../assets/icons/google.svg";
import { Link } from "react-router-dom";
import ROUTE_NAMES from "../config/routes";

const Signup = () => {
  const [loading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = useCallback(() => {
    setShowPassword((s) => !s);
  }, []);

  return (
    <div className="sm:mx-72">
      <HomeTitle />
      <div className="bg-white p-4 rounded-md shadow-md max-w-xs mx-auto sm:mx-0">
        <TextInput id="email" label="Email" type="text" />
        <TextInput
          id="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          className="mt-2"
          endIcon={
            showPassword ? (
              <EyeOff
                className="cursor-pointer"
                onClick={handleToggleShowPassword}
              />
            ) : (
              <Eye
                className="cursor-pointer"
                onClick={handleToggleShowPassword}
              />
            )
          }
        />
        <TextInput
          id="cpassword"
          label="Confirm password"
          type="password"
          className="mt-2"
        />
        <Button
          loading={loading}
          disabled={loading}
          className="btn-blue btn-large mt-4"
        >
          Sign up
        </Button>
        <Button
          className="btn-white border border-grey border-solid btn-large mt-4 text-gray-700"
          startIcon={<Google className="no-stroke-color" />}
        >
          Sign up using Google
        </Button>
        <Link className="text-center" to={ROUTE_NAMES.SIGN_IN}>
          <p className="sbody mt-3">
            Already have an account?{" "}
            <span className="font-bold text-blue-dark">Log in</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
