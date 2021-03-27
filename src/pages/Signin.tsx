import React, { useCallback, useState } from "react";
import Button from "../components/Button";
import HomeTitle from "../components/HomeTitle";
import TextInput from "../components/TextInput";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRemember(e.target.checked);
    },
    []
  );

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
      </div>
    </div>
  );
};

export default Signin;
