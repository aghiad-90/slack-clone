import React, { useState, useEffect } from "react";
import "../Style/sidebar.css";
import db from "../config/firebase";

import Fiber from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOptions from "./SidebarOptions";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import TelegramIcon from "@material-ui/icons/Telegram";

import AddIcon from "@material-ui/icons/Add";
import { useStateValue } from "../Context/StateProvider";

function Sidebar() {
  const [channel, setChannels] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Slack Clone</h2>
          <h3>
            <Fiber className="fiber__icon" />
            {user?.displayName}
          </h3>
        </div>
        <CreateIcon />
      </div>
      <div className="sidebar__option">
        <SidebarOptions Icon={InsertCommentIcon} title="Thread" />
        <SidebarOptions Icon={InboxIcon} title="Mentions & Reactions" />
        <SidebarOptions Icon={DraftsIcon} title="Saved items" />
        <SidebarOptions Icon={BookmarkBorderIcon} title="Channel Browser" />
        <SidebarOptions Icon={PeopleAltIcon} title="People & groups" />
        <SidebarOptions Icon={AppsIcon} title="Apps" />
        <SidebarOptions Icon={FileCopyIcon} title="File Browser" />

        <hr />
        <SidebarOptions Icon={TelegramIcon} title="channel" />
        <hr />
        <SidebarOptions Icon={AddIcon} addChannelOption title="Add Channel" />

        {channel.map((doc) => (
          <SidebarOptions title={doc.name} id={doc.id} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
