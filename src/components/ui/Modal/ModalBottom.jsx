import classNames from "classnames";
import React from "react";

const ModalBottom = ({ children, className }) => {
  return (
    <div className={classNames("modal__bottom", className)}>{children}</div>
  );
};

export default ModalBottom;
