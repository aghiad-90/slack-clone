import React from "react";
import "../Style/message.css";
function Message({ message, user, timeStamp, userImage }) {
  return (
    <div className="message">
      <img src={userImage} />
      <div className="message__info">
        <h4>
          {user}
          <span className="message__timeStamp">
            {new Date(timeStamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
