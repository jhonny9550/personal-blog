import React, { useCallback, useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import HomeTitle from "../components/HomeTitle";
import TextInput from "../components/TextInput";
import ROUTE_NAMES from "../config/routes";

const Signin = () => {
  const [loading] = useState(false);
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRemember(e.target.checked);
    },
    []
  );

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
        <label className="inline-flex items-center mt-3">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-gray-600"
            checked={remember}
            onChange={handleOnChange}
          />
          <span className="sbody ml-2">Remember me</span>
        </label>
        <Button
          loading={loading}
          disabled={loading}
          className="btn-blue btn-large mt-4"
        >
          Log in
        </Button>
        <Link className="text-center" to={ROUTE_NAMES.SIGN_UP}>
          <p className="sbody mt-3">
            Don't have an account?{" "}
            <span className="font-bold text-blue-dark">Sign up</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
