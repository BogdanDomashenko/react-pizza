import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Button, Input } from "../ui";

const LoginForm = (props) => {
  const [phone, setPhone] = useState("");

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
        />
        <Button className="login-form__button button--orange">
          <span>Sign in</span>
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
