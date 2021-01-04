import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import styled from "styled-components";
import "../../styles/ScoreInput.css";

const StyledTextField = styled(TextField)`
  .MuiInputBase-input,
  .MuiFormLabel-root {
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
  // TODO: Cleanup states and consolidate into one state object?
  const [course, setCourse] = useState("");
  const [score, setScore] = useState("");
  const [coursePar, setCoursePar] = useState("");
  const [greensInReg, setGIR] = useState("");
  const [noOfFairways, setFairways] = useState("");
  const [noOfPutts, setPutts] = useState("");

  const submitScore = (event) => {
    event.preventDefault();
    let scoreSubmission = {
      course,
      score,
      coursePar,
      greensInReg,
      noOfFairways,
      noOfPutts,
    };
    props.createScore(scoreSubmission);
  };
  return (
    <div className="quick-input-wrapper">
      <h2>Add Score</h2>
      <form noValidate autoComplete="off" onSubmit={submitScore}>
        <div className="required-inputs">
          <div className="input">
            <StyledTextField
              onChange={(event) => setCourse(event.target.value)}
              id="outlined-basic"
              label="Course name"
              variant="outlined"
            />
          </div>
          <div className="input">
            <StyledTextField
              onChange={(event) => setScore(event.target.value)}
              id="outlined-basic"
              label="Score"
              variant="outlined"
            />
          </div>
          <div className="input">
            <StyledTextField
              onChange={(event) => setCoursePar(event.target.value)}
              id="outlined-basic"
              label="Course PAR"
              variant="outlined"
            />
          </div>
        </div>
        <div className="optional-inputs">
          <div className="input">
            <StyledTextField
              onChange={(event) => setGIR(event.target.value)}
              id="outlined-basic"
              label="Greens in Regulation"
              variant="outlined"
            />
          </div>
          <div className="input">
            <StyledTextField
              onChange={(event) => setFairways(event.target.value)}
              id="outlined-basic"
              label="Fairways Hit"
              variant="outlined"
            />
          </div>
          <div className="input">
            <StyledTextField
              onChange={(event) => setPutts(event.target.value)}
              id="outlined-basic"
              label="No. of Putts"
              variant="outlined"
            />
          </div>
        </div>

        <div className="input">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
