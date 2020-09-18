import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

export default function ScoreInput(props) {
  const [courseName, setCourseName] = useState("");
  const [score, setScore] = useState("");
  const [coursePAR, setCoursePAR] = useState("");

  const submitScore = (event) => {
    event.preventDefault();
    let scoreSubmission = {
      courseName,
      score,
      coursePAR,
    };
    props.createScore(scoreSubmission);
  };
  return (
    <div>
      <form noValidate autoComplete="off" onSubmit={submitScore}>
        <TextField
          onChange={(event) => setCourseName(event.target.value)}
          id="outlined-basic"
          label="Course name"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setScore(event.target.value)}
          id="outlined-basic"
          label="Score"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setCoursePAR(event.target.value)}
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
