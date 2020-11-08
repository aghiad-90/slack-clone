import React from "react";
import { useHistory } from "react-router-dom";
import "../Style/sidebarOption.css";
import db from "../config/firebase";

function SidebarOptions({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push("title");
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please Enter the Channel Name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebar__channel">
          {" "}
          <span className="sidebar__hash">#</span> {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOptions;
