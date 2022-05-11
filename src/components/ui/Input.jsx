import React from "react";

function Input(props) {
  return (
    <div className="input">
      <div className="input__label">{props.label}</div>
      <input {...props} />
    </div>
  );
}

export default Input;
