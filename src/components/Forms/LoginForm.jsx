import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { setAuthError, signIn } from "../../redux/actions/user";
import { Button, Input } from "../ui";

const LoginForm = () => {
  const dispatch = useDispatch();

  const { authError } = useSelector((state) => state.user);
  const [phone, setPhone] = useState("");

  const schema = yup.object().shape({
    phone: yup.string().required("Required field"),
    password: yup.string().required("Required field"),
  });

  useEffect(() => {
    dispatch(setAuthError());
  }, []);

  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(signIn(values.phone, values.password));
    },
    onChange: () => {
      if (authError) {
        dispatch(setAuthError());
      }
    },
    validationSchema: schema,
  });

  return (
    <div className="login-form">
      <form className="login-form__content" onSubmit={formik.handleSubmit}>
        <PhoneInput
          country="us"
          id="phone"
          name="phone"
          isValid={!formik.errors.phone}
          onChange={(phone, country) =>
            formik.setValues({
              ...formik.values,
              phone: phone,
            })
          }
          value={formik.values.phone}
          className="login-form__phone"
          inputStyle={{ width: "100%" }}
        />
        <Input
          label="Password"
          type="password"
          className="login-form__password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />
        <Button
          type="submit"
          className="login-form__button button--default button--orange"
        >
          <span>Sign in</span>
        </Button>
        <div className="login-form__error">{authError}</div>
      </form>
    </div>
  );
};

export default LoginForm;
