import React from "react";
import "./welcome.css";

export default function Welcome() {
  return (
    <div className={"welcome"}>
      <h1>
        Welcome to my Chat application{" "}
        <span role={"img"} aria-label="emoji">
          💬
        </span>{" "}
        <span role={"img"} aria-label="emoji">
          🙊
        </span>
      </h1>

      <p className={"mt-5"}>
        Fill your name and room name and joind other{" "}
        <span role={"img"} aria-label="emoji">
          🥳
        </span>
      </p>
    </div>
  );
}
