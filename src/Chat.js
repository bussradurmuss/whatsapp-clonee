/* eslint-disable react/jsx-no-undef */
import {Avatar} from '@mui/material';
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import React, {useEffect, useState} from 'react'
import './Chat.css';
import {InsertEmoticon, Mic, MiscellaneousServicesOutlined} from '@mui/icons-material';

function Chat() {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('you typed >>>', input)
    }

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
            <div className='chat__body'>
                <p className={
                    `chat__message ${
                        true && "chat__reciever"
                    }`
                }>Hey Guys
                    <span className='chat__name'>Büşra Durmuş</span>
                    <span className='chat__timestamp'>
                        19:40
                    </span>

                </p>
            </div>
            <div className='chat__footer'>
                <InsertEmoticon/>
                <form>
                    <input value={input}
                        onChange={
                            (e) => setInput(e.target.value)
                        }
                        type='text'
                        placeholder='Type a message'/>
                    <button onClick={sendMessage}
                        type='submit'>Send a message</button>
                </form>
                <Mic/>

            </div>
        </div>

    )
}
export default Chat
