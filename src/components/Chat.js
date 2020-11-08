import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import InfoIcon from "@material-ui/icons/Info";

import db from "../config/firebase";
import "../Style/chat.css";
import Message from "./Message";
import ChatInput from "./ChantInput";

function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snap) => setRoomDetails(snap.data()));

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timeStamp", "asc")
        .onSnapshot((snapshot) =>
          setMessage(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);

  useEffect(() => {
    document.querySelector(".chat__body").scrollTop = document.querySelector(
      ".chat__body"
    ).scrollHeight;
  }, [messages]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerRLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__body">
        {messages.map(({ message, user, timeStamp, userImage }) => (
          <Message
            message={message}
            user={user}
            timeStamp={timeStamp}
            userImage={userImage}
          />
        ))}
        <ChatInput channelName={roomDetails?.name} channelId={roomId} />
      </div>
    </div>
  );
}

export default Chat;
