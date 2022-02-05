import React from "react";
import classNames from "classnames";

const Button = ({ children, onClick, className, outline }) => {
  return (
    <button
      className={classNames("button", className, { "button-outline": outline })}
    >
      {children}
    </button>
  );
};

export default Button;
