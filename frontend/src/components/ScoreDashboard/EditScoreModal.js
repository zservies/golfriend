import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  .MuiInputBase-input,
  .MuiFormLabel-root {
    color: black;
    &.Mui-focused {
      color: black;
    }
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: black;
  }
`;

export default function EditScore(props) {
  const [openModal, setOpen] = useState(false);
  const [modalStyle] = useState({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "450px",
    height: "300px",
    backgroundColor: "#f0f0ef",
    outline: 0,
    borderRadius: "10px",
    boxShadow: "2px 2px 4px 5px rgba(0, 0, 0, 0.2)",
    color: "black",
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
      <h2>Edit Score</h2>
      <form style={{ height: "100%" }} onSubmit={editScoreHandler}>
        <div>
          <StyledTextField
            onChange={(event) => setCourse(event.target.value)}
            id="outlined-basic"
            label={course}
            variant="outlined"
          />
        </div>
        <div>
          <StyledTextField
            onChange={(event) => setScore(event.target.value)}
            id="outlined-basic"
            label={score}
            variant="outlined"
          />
        </div>
        <div>
          <StyledTextField
            onChange={(event) => setCoursePar(event.target.value)}
            id="outlined-basic"
            label={coursePar}
            variant="outlined"
          />
        </div>
        <div>
          <IconButton type="submit">
            <SaveIcon />
          </IconButton>
        </div>
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
