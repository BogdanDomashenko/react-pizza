import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useInput, usePhoneInput } from "../hooks";
import { checkoutCart } from "../redux/actions/cart";
import { Button, Input, Modal, ModalBody, ModalBottom } from "./ui";

const СheckoutModal = ({ visible, setVisible }) => {
  const phone = usePhoneInput();
  const dispatch = useDispatch();

  const onConfirm = () => {
    dispatch(checkoutCart(phone.value));
    setVisible(false);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Modal
      className="checkout-modal"
      title="Checkout"
      onClose={onClose}
      visible={visible}
    >
      <ModalBody className="checkout-modal__body">
        <Input className="" type="tel" placeholder="Phone number" {...phone} />
      </ModalBody>
      <ModalBottom className="checkout-modal__bottom">
        <Button className="button--orange" onClick={onConfirm}>
          <span>Checkout</span>
        </Button>
      </ModalBottom>
    </Modal>
  );
};

export default СheckoutModal;
