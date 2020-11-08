import React, { useState } from "react";
import "../Style/chatInput.css";
import db from "../config/firebase";
import { useStateValue } from "../Context/StateProvider";
import firebase from "firebase";

function ChantInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms")
        .doc(channelId)
        .collection("messages")

        .add({
          message: input,
          timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: user.displayName,
          userImage: user.photoURL,
        });
      setInput("");
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          placeholder={`Message #${channelName?.toLowerCase()}`}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChantInput;
