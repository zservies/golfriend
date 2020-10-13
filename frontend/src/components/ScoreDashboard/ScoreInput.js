import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  .MuiInputBase-input, .MuiFormLabel-root {
    color: white;
    &.Mui-focused {
      color: white;
    }
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
`;

export default function ScoreInput(props) {
  const [course, setCourse] = useState("");
  const [score, setScore] = useState("");
  const [coursePar, setCoursePar] = useState("");

  const submitScore = (event) => {
    event.preventDefault();
    let scoreSubmission = {
      course,
      score,
      coursePar,
    };
    props.createScore(scoreSubmission);
  };
  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={submitScore}>
        <StyledTextField
          onChange={(event) => setCourse(event.target.value)}
          id="outlined-basic"
          label="Course name"
          variant="outlined"
        />
        <StyledTextField
          onChange={(event) => setScore(event.target.value)}
          id="outlined-basic"
          label="Score"
          variant="outlined"
        />
        <StyledTextField
          onChange={(event) => setCoursePar(event.target.value)}
          id="outlined-basic"
          label="Course PAR"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<SaveIcon />}
          type="submit"
        >
          Save
        </Button>
      </form>
    </div>
  );
}
