import { Avatar } from '@material-ui/core';
import React from 'react';
import '../css/Post.css';
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
function Post() {
  return (
    <div className="post">
     <div className='post__info'>
        <Avatar/>
        <h5>Username</h5>
        <small>Timestamp</small>
     </div>
     <div className='post__body'>
        <div className='post__question'>
            <p>Question</p>
            <button className='post__btnAnswer'>Answer</button>
        </div>
        <div className='post__answer'>
            <p></p>
        </div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvsIZB2CNcp8KHzWBzn6c7RL6hgCWzOjxzBw&usqp=CAU'/>
     </div>
     <div className='post__footer'>
        <div className='post__footerAction'>
        <ArrowUpwardOutlinedIcon />
        <ArrowDownwardOutlinedIcon />
        </div>
        <RepeatOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
     </div>
    </div>
  );
}

export default Post;