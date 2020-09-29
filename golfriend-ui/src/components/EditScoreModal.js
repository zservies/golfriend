import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";

export default function EditScore(props) {
  const [openModal, setOpen] = useState(false);
  const [modalStyle] = useState({
    margin: "auto",
    width: "35%",
    height: "50%",
    background: "orange",
    textAlign: "center",
  });
  // Make these one object?
  const [course, setCourse] = useState("");
  const [score, setScore] = useState("");
  const [coursePar, setCoursePar] = useState("");

  const editScoreHandler = (event) => {
    event.preventDefault();
    let editedScore = {
      course,
      score,
      coursePar
    };
    console.log(editedScore);
  }

  const modalBody = (
    <div style={modalStyle}>
      <h2>Edit Values</h2>
      <form onSubmit={editScoreHandler}>
        <input onChange={(event)=>setCourse(event.target.value)} type="text" placeholder="Course"></input>
        <input onChange={(event)=>setScore(event.target.value)} type="text" placeholder="Score" />
        <input onChange={(event)=>setCoursePar(event.target.value)} type="text" placeholder="PAR" />
        <button type="submit">submit</button>
      </form>
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
