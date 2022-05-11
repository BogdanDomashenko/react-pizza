import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { setAuthError, signIn } from "../../redux/actions/user";
import { Button, Input } from "../ui";

const LoginForm = () => {
  const dispatch = useDispatch();

  const { authError } = useSelector((state) => state.user);
  const [phone, setPhone] = useState("");
  const password = useInput();

  const onSignInClick = () => {
    dispatch(signIn(phone, password.value));
  };

  useEffect(() => {
    if (authError) {
      dispatch(setAuthError(null));
    }
  }, [password.value, phone]);

  return (
    <div className="login-form">
      <div className="login-form__content">
        <PhoneInput
          country="us"
          value={phone}
          onChange={setPhone}
          className="login-form__phone"
        />
        <Input
          label="Password"
          type="password"
          className="login-form__password"
          {...password}
        />
        <Button
          className="login-form__button button--orange"
          onClick={onSignInClick}
        >
          <span>Sign in</span>
        </Button>
        <div className="login-form__error">{authError}</div>
      </div>
    </div>
  );
};

export default LoginForm;
