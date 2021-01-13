import React, { useState } from "react";
import "../styles/Login.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  .MuiInputBase-input,
  .MuiFormLabel-root {
    color: #5b5a63;
    &.Mui-focused {
      color: #5b5a63;
    }
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #5b5a63;
  }
`;

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = (event) => {
    event.preventDefault();
    const user = {
      username,
      password,
    };
    console.log(user);
    // props.submitLogin(user); //Function needs to be created.
  };

  return (
    <form className="login-wrapper" onSubmit={submitLogin}>
      <h3>Login</h3>
      <div className="username">
        <StyledTextField
          onChange={(event) => setUsername(event.target.value)}
          type="email"
          variant="outlined"
          label="Username"
        ></StyledTextField>
      </div>
      <div className="password">
        <StyledTextField
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          variant="outlined"
          label="Password"
        ></StyledTextField>
      </div>
      <div className="login-button">
        <Button variant="contained" size="large" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
}
