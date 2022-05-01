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
      title="Оформление заказа"
      onClose={onCloseModal}
      visible={visible}
    >
      <ModalBody className="checkout-modal__body">
        <Input
          className=""
          type="tel"
          placeholder="Номер телефона"
          {...phone}
        />
      </ModalBody>
      <ModalBottom className="checkout-modal__bottom">
        <Button className="button--orange">
          <span>Заказать</span>
        </Button>
      </ModalBottom>
    </Modal>
  );
};

export default СheckoutModal;
