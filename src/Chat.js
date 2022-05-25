/* eslint-disable react/jsx-no-undef */
import {Avatar} from '@mui/material';
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import React, {useEffect, useState} from 'react'
import './Chat.css';

function Chat() {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={
                    `https://avatars.dicebear.com/api/human/${seed}.svg`
                }/>

                <div className='chat__headerInfo'>
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>


            </div>
            <div className='chat__body'></div>
            <div className='chat__footer'></div>
        </div>
    )
}

export default Chat
