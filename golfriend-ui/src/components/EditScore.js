import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";


export default function EditScore(props) {
  const [openModal, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button onClick= {handleOpen}>Open</button>
      <Modal open={openModal} onClose={handleClose}>
        <div>
          Hi I'm open
        </div>
      </Modal>
    </div>
  );
}
