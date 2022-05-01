import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import Button from "../Button";
import PlusIcon from "../icons/PlusIcon";

const Modal = ({ title, children, className, onClose, visible }) => {
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const handleOutsideClick = (e) => {
    if (visible && ref.current && !ref.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div className={classNames("modal", { "modal--hidden": !visible })}>
      <div className={classNames("modal__content", className)} ref={ref}>
        <div className="modal__head">
          <h2>{title}</h2>
          <div className="cart__item-remove">
            <Button
              className="button button--outline button--circle"
              onClick={onClose}
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
