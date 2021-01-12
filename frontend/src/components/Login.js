import React, { useState } from "react";
import "../styles/Login.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="login-wrapper">
      <h3>Login</h3>
      <div className="username">
        <TextField type="email" variant="outlined" label="Username"></TextField>
      </div>
      <div className="password">
        <TextField
          type="password"
          variant="outlined"
          label="Password"
        ></TextField>
      </div>
      <div className="login-button">
        <Button variant="contained" color="#1D1B36" size="large" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
}
