import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import db from "./firebase";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Enter a name for this chat");

    if (roomName) {
      addDoc(collection(db, "rooms"), { name: roomName });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>Last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
