import classNames from "classnames";
import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalVisibility } from "../../../redux/actions/modals";
import Button from "../Button";
import PlusIcon from "../icons/PlusIcon";

const Modal = ({ name, title, children, className, onClose, visible }) => {
  const ref = useRef();
  const visibility = name
    ? useSelector((state) => state.modals[name].visibility)
    : visible;
  const dispatch = useDispatch();

  const handleOutsideClick = useCallback(
    (e) => {
      if (visibility && ref.current && !ref.current.contains(e.target)) {
        if (name) {
          dispatch(toggleModalVisibility(name));
        }
        onClose && onClose();
      }
    },
    [visibility]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [visibility]);

  const onCloseClick = () => {
    if (name) {
      dispatch(toggleModalVisibility(name));
    }
    onClose && onClose();
  };

  return (
    <div
      className={classNames("modal", {
        "modal--hidden": !visibility,
      })}
    >
      <div className={classNames("modal__content", className)} ref={ref}>
        <div className="modal__head">
          <h2>{title}</h2>
          <div className="cart__item-remove">
            <Button
              className="button button--outline button--circle"
              onClick={onCloseClick}
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
