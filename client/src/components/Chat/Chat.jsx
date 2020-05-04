import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";
import ExsitUser from "../Join/ExsitUser";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [exsit, setExsit] = useState(false);

  // This is for Heroku deploy
  // const ENDPOINT = "https://chat-applicatiion.herokuapp.com/";

  // This is Local Server express js
  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        setExsit(!exsit);
      }
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search, exsit]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
    socket.on("roomData", (roomData) => {
      setUsers(roomData.users);
    });
  }, [messages, users]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className={"outerContainer container"}>
      {!exsit ? (
        <div className={"row m-0"}>
          <div className={"col-12 col-lg-6 p-0"}>
            <div className={"containerInner "}>
              <InfoBar room={room} />
              <Messages messages={messages} name={name} />
              <Input
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
              />
            </div>
          </div>

          <TextContainer users={users} />
        </div>
      ) : (
        <ExsitUser />
      )}
    </div>
  );
};

export default Chat;
