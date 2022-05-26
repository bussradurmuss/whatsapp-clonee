import React, {useEffect, useState} from "react";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import "./Sidebar.css";
import {SearchOutlined} from "@mui/icons-material";
import SidebarChat from "./SidebarChat";
import db from "./firebase";

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        db.collection("rooms").onSnapshot((snapshot) => {
            setRooms(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()})))

        })

    }, []);


    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input type="text" placeholder="Search or start new chat"/>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat addNewChat/> {
                rooms.map(room => (
                    <SidebarChat key={
                            room.id
                        }
                        id={
                            room.id
                        }
                        name={
                            room.data.name
                        }/>
                ))
            } </div>
        </div>
    );;
}

export default Sidebar;
