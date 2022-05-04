import React, { useEffect, useState } from "react";
import { useInput, usePhoneInput } from "../hooks";
import { Button, Input, Modal, ModalBody, ModalBottom } from "./ui";

const СheckoutModal = ({ visible, onClose }) => {
  const phone = usePhoneInput();

  const onCloseModal = () => {
    onClose();
  };

  return (
    <Modal
      className="checkout-modal"
      title="Checkout"
      onClose={onCloseModal}
      visible={visible}
    >
      <ModalBody className="checkout-modal__body">
        <Input className="" type="tel" placeholder="Phone number" {...phone} />
      </ModalBody>
      <ModalBottom className="checkout-modal__bottom">
        <Button className="button--orange">
          <span>Checkout</span>
        </Button>
      </ModalBottom>
    </Modal>
  );
};

export default СheckoutModal;
