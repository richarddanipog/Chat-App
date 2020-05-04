import React, { useState } from "react";
import { Link } from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import "./join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className={"joinOuterContainer"}>
      <Welcome />
      <div className={"joinInnerContainer"}>
        <h1 className={"heading"}>Join</h1>
        <div className={"joinContent"}>
          <div className={"joinInput"}>
            <input
              type="text"
              placeholder={"Name"}
              className={"joinInput"}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={"joinInput"}>
            <input
              type="text"
              placeholder={"Room"}
              className={"joinInput"}
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
          <div className={"joinButton"}>
            <Link
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/chat?name=${name}&room=${room}`}
            >
              <button className="button" type={"submit"}>
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
