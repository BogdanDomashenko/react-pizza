import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkoutCart } from "../../redux/actions/cart";
import { toggleModalVisibility } from "../../redux/actions/modals";
import { MODALS } from "../../utils/constants";
import { Button, Modal, ModalBody, ModalBottom } from "../ui";

const СheckoutModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { orderId } = useSelector((state) => state.cart);
  const [phone, setPhone] = useState("");

  const onConfirmModal = () => {
    dispatch(checkoutCart(phone));
    dispatch(toggleModalVisibility(MODALS.СheckoutModal));
    dispatch(toggleModalVisibility(MODALS.СheckoutResultModal));
  };

  useEffect(() => {
    if (orderId) {
      navigate("/order/" + orderId);
    }
  }, [orderId]);

  return (
    <Modal
      className="checkout-modal"
      name={MODALS.СheckoutModal}
      title="Checkout"
    >
      <ModalBody className="checkout-modal__body">
        <PhoneInput country={"us"} value={phone} onChange={setPhone} />
      </ModalBody>
      <ModalBottom className="checkout-modal__bottom">
        <Button
          className="button--default button--orange"
          onClick={onConfirmModal}
        >
          <span>Checkout</span>
        </Button>
      </ModalBottom>
    </Modal>
  );
};

export default СheckoutModal;
