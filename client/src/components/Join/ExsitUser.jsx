import React from "react";
import { Link } from "react-router-dom";
import "./join.css";

export default function ExsitUser() {
  return (
    <div className={"exsitUser"}>
      <h1>
        The name is already occupied Try another name{" "}
        <span role={"img"} aria-label="emoji">
          😉
        </span>
      </h1>
      <Link to={"/"}>Return to Login</Link>
    </div>
  );
}
