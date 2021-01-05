import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ScoreInput from "./ScoreInput";

export default function EditScore(props) {
  const [openModal, setOpen] = useState(false);
  const [modalStyle] = useState({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "700px",
    height: "300px",
    backgroundColor: "#44444B",
    outline: 0,
    borderRadius: "10px",
    boxShadow: "2px 2px 4px 5px rgba(0, 0, 0, 0.2)",
    color: "white",
  });
  // Make these one object?
  const [course, setCourse] = useState(props.scoreItem.course);
  const [score, setScore] = useState(props.scoreItem.score);
  const [coursePar, setCoursePar] = useState(props.scoreItem.coursePar);

  const editScoreHandler = (event) => {
    event.preventDefault();
    let editedScore = {
      id: props.scoreItem.id, //Capturing ID from the scoreId sent from ScoreList component and setting it up in the edited object.
      course,
      score,
      coursePar,
    };
    props.editScore(editedScore);
    setOpen(false); // Closing modal after submission. Maybe change to display success/fail message in future.
  };

  const modalBody = (
    <div style={modalStyle}>
      <h2>Edit Values</h2>
      <form onSubmit={editScoreHandler}>
        <input
          onChange={(event) => setCourse(event.target.value)}
          type="text"
          placeholder={course}
        ></input>
        <input
          onChange={(event) => setScore(Number(event.target.value))}
          type="text"
          placeholder={score}
        />
        <input
          onChange={(event) => setCoursePar(Number(event.target.value))}
          type="text"
          placeholder={coursePar}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );


  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={openModal}
        onClose={() => setOpen(false)}
      >
        {modalBody}
      </Modal>
    </div>
  );
}
