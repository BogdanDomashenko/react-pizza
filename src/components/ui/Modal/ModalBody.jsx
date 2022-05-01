import classNames from "classnames";
import React from "react";

const ModalBody = ({ children, className }) => {
  return <div className={classNames("modal__body", className)}>{children}</div>;
};

export default ModalBody;
