import React from "react";
import Login from "./Login";
import Registration from "./Register";
import "../styles/Landing.css";

export default function Landing(props) {
  return (
    <div className="landing-wrapper">
      <Login></Login>
    </div>
  );
}
