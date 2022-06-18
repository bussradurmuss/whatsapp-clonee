/* eslint-disable react/jsx-no-undef */
import { Avatar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import React, { useEffect, useState } from "react";
import "./Chat.css";
import { InsertEmoticon, Mic } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
import {
  onSnapshot,
  collection,
  doc,
  // orderBy,
  // query,
  addDoc,
} from "firebase/firestore";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (roomId) {
      const roomsRef = doc(collection(db, "rooms"), roomId);
      onSnapshot(roomsRef, (snapshot) => {
        setRoomName(snapshot.data().name);
      });

      const messagesRef = collection(roomsRef, "messages");
      // const q = query(messagesRef, orderBy("timestamp", "asc"));
      onSnapshot(messagesRef, (snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();

    const roomsRef = doc(collection(db, "rooms"), roomId);
    const messagesRef = collection(roomsRef, "messages");
    const message = {
      message: input,
      name: user.displayName,
      // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };
    addDoc(messagesRef, message);
    setInput("");
  };
  //  addDoc(collection(roomsRef, "messages"), {
  //       message: input,
  //       name: user.displayName,
  //     });
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at ...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p
            className={`chat__message ${
              message.name === user.displayName && "chat__reciever"
            }`}
          >
            <span className="chat__name">{message.name}</span> {message.message}
            {/* <span className="chat__timestamp">
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span> */}
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}
export default Chat;
