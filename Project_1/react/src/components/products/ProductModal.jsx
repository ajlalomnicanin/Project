import React from "react";
import Modal from "react-modal";
import { Typography } from "@mui/material";

const ProductModal = ({ isOpen, onRequestClose, text, price }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Detalji proizvoda"
    >
      <Typography variant="h5">Detalji proizvoda</Typography>
      <Typography>{`Opis: ${text}`}</Typography>
      <Typography>{`Cena: € ${price}`}</Typography>
    </Modal>
  );
};

export default ProductModal;
