import React from "react";
import Modal from "react-modal";
import { Typography, Button } from "@mui/material";

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
      {/* Dodajte ostale informacije koje želite prikazati */}
      <Button onClick={onRequestClose}>Zatvori</Button>
    </Modal>
  );
};

export default ProductModal;
