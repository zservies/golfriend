import React from "react";
import Login from "./Login";
import Registration from "./Register";
import "../styles/Landing.css";

export default function Landing(props) {
  return (
    <div className="landing-wrapper">
      <div className="reg-widget">
        <Registration></Registration>
      </div>
      <div className="login-widget">
        <Login></Login>
      </div>
    </div>
  );
}
