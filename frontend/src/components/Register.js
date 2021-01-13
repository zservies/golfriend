import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../styles/Register.css";
import styled from "styled-components";

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

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submitRegistration = (event) => {
    event.preventDefault();
    let user = {
      email,
      name,
      password
    };
    console.log(user);
    // props.createUser(user); // Function doesn't exist at the moment.
  }

  return (
    <form className="reg-wrapper" onSubmit={submitRegistration}>
      <h3>Register</h3>
      <div className="reg-username">
        <StyledTextField
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          variant="outlined"
          label="Email"
        ></StyledTextField>
      </div>
      <div className="reg-name">
        <StyledTextField
          onChange={(event) => setName(event.target.value)}
          variant="outlined"
          label="Name"
        ></StyledTextField>
      </div>
      <div className="reg-password">
        <StyledTextField
          onChange={(event) => setPassword(event.target.value)}
          variant="outlined"
          label="Password"
          type="password"
        ></StyledTextField>
      </div>
      <Button variant="contained" size="large" type="submit">
        Submit
      </Button>
    </form>
  );
}
