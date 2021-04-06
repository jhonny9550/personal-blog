import React, { useCallback, useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import Button from "../components/Button";
import HomeTitle from "../components/HomeTitle";
import TextInput from "../components/TextInput";
import { ReactComponent as Google } from "../assets/icons/google.svg";
import ROUTE_NAMES from "../config/routes";
import useForm from "../hooks/form.hook";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations/user";
import { storeAuthToken } from "../utils/storage";
import { USER_ROLES } from "../utils/constants";

const signupValidationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Min 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const { values, isValid, useInput } = useForm(
    { email: "", password: "", confirmPassword: "" },
    signupValidationSchema
  );
  const [signUp, { loading }] = useMutation(SIGN_UP);

  const handleToggleShowPassword = useCallback(() => {
    setShowPassword((s) => !s);
  }, []);

  const handleOnSubmit = useCallback(async () => {
    const { email, password } = values;
    try {
      const { data } = await signUp({
        variables: {
          userInput: {
            email,
            password,
          },
        },
      });
      const { success, message, token, user } = data.signup;
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
  }, [values, signUp, history]);

  return (
    <div className="sm:mx-72">
      <HomeTitle />
      <div className="bg-white p-4 rounded-md shadow-md max-w-xs mx-auto sm:mx-0">
        <TextInput
          id="email"
          label="Email"
          type="email"
          {...useInput("email")}
        />
        <TextInput
          id="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          className="mt-2"
          {...useInput("password")}
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
          {...useInput("confirmPassword")}
        />
        {error && <p className="text-red text-center mt-2">{error}</p>}
        <Button
          className="btn-blue btn-large mt-6"
          loading={loading}
          disabled={loading || !isValid}
          onClick={handleOnSubmit}
        >
          Sign up
        </Button>
        <Button
          className="btn-white border border-grey border-solid btn-large mt-4 text-gray-700"
          startIcon={<Google className="no-stroke-color" />}
          disabled={loading}
        >
          Sign up using Google
        </Button>
        <Link className="text-center" to={ROUTE_NAMES.SIGN_IN}>
          <p className="sbody mt-12">
            Already have an account?{" "}
            <span className="font-bold text-blue-dark">Log in</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
