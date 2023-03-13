import React from 'react';
import '../css/Askbox.css';
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from '../features/userSlice';
function Askbox() {
  const user=useSelector(selectUser);
  return (
    <div className="askbox">
     <div className="askBox__info">
        <Avatar
          src={user.photo}
        />
        <h5>{user.displayName}</h5>
      </div>
      <div className="askBox__base">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}

export default Askbox;