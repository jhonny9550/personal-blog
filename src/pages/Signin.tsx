import { useMutation } from "@apollo/client";
import React, { useCallback, useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { Link, useHistory } from "react-router-dom";
import Button from "../components/Button";
import HomeTitle from "../components/HomeTitle";
import TextInput from "../components/TextInput";
import ROUTE_NAMES from "../config/routes";
import { LOGIN } from "../graphql/mutations/user";
import {
  LoginMutationVariables,
  LoginResponse,
} from "../interfaces/graphql.interface";
import { USER_ROLES } from "../utils/constants";
import { storeAuthToken } from "../utils/storage";

const Signin = () => {
  const history = useHistory();
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [login, { loading }] = useMutation<
    { login: LoginResponse },
    LoginMutationVariables
  >(LOGIN);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRemember(e.target.checked);
    },
    []
  );

  const handleToggleShowPassword = useCallback(() => {
    setShowPassword((s) => !s);
  }, []);

  const handleOnLogin = useCallback(async () => {
    try {
      const { data } = await login({ variables: { email, password } });
      const res = data?.login;
      if (!res) return;
      const { success, message, token, user } = res;
      if (success) {
        storeAuthToken(token);
        if (user.role === USER_ROLES.ADMIN) {
          history.replace(ROUTE_NAMES.ADMIN);
        } else {
          history.replace(ROUTE_NAMES.POSTS);
        }
      } else {
        setError(message);
      }
    } catch (error) {
      console.log(error);
    }
  }, [login, email, password, history]);

  return (
    <div className="sm:mx-72">
      <HomeTitle />
      <div className="bg-white p-4 rounded-md shadow-md max-w-xs mx-auto sm:mx-0">
        <TextInput
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          id="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          className="mt-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        {error && <p className="text-red text-center mt-2">{error}</p>}
        <div className="flex items-center justify-between mt-3">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-gray-600"
              checked={remember}
              onChange={handleOnChange}
            />
            <span className="sbody ml-2">Remember me</span>
          </label>
          <Link className="sbody" to={ROUTE_NAMES.RESET_PASSWORD}>
            Forgot password?
          </Link>
        </div>
        <Button
          loading={loading}
          disabled={loading}
          className="btn-blue btn-large mt-6"
          onClick={handleOnLogin}
        >
          Log in
        </Button>
        <Link className="text-center" to={ROUTE_NAMES.SIGN_UP}>
          <p className="sbody mt-8">
            Don't have an account?{" "}
            <span className="font-bold text-blue-dark">Sign up</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
