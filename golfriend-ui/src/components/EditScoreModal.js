import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";

export default function EditScore(props) {
  const [openModal, setOpen] = useState(false);
  const [modalStyle] = useState({
    margin: "auto",
    width: "35%",
    height: "50%",
    background: "white",
    textAlign: 'center'
  });

  const modalBody = (
    <div style={modalStyle}>
      <h2>Edit Values</h2>
      <p>Edit some values</p>
    </div>
  );
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick={handleOpen}>Open</button>
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={openModal}
        onClose={handleClose}
      >
        {modalBody}
      </Modal>
    </div>
  );
}
