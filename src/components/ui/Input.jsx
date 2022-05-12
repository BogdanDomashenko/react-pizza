import classNames from "classnames";
import React from "react";

function Input(props) {
  return (
    <div className={classNames("input", { "input--with-icon": props.icon })}>
      {props.label ? <div className="input__label">{props.label}</div> : ""}
      <div className="input__icon">{props.icon}</div>
      <input {...props} />
    </div>
  );
}

export default Input;
