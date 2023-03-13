import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar, Button } from "@material-ui/core";
import '../css/Navbar.css';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import { useSelector } from "react-redux";
const Navbar = () => {
    const user=useSelector(selectUser)
    return (
        <div className='docHeader'>
            <div className='docheader__logo'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvsIZB2CNcp8KHzWBzn6c7RL6hgCWzOjxzBw&usqp=CAU'
                      alt=""/>
            </div>
            <div className='docheader__icons'>
                <div className='docheader__icon'><HomeIcon /></div>
                <div className='docheader__icon'><FeaturedPlayListOutlinedIcon /></div>
                <div className='docheader__icon'><AssignmentTurnedInOutlinedIcon /></div>
                <div className='docheader__icon'><PeopleAltOutlinedIcon /></div>
                <div className='docheader__icon'> <NotificationsOutlinedIcon /></div>
            </div>
            <div className="docheader__input"><SearchIcon />
                <input type="input" placeholder="Search Askdoc" />
            </div>
            <div className="docheader__Rem">
        <div className="docheader__avatar">
          <Avatar onClick={()=>auth.signOut()} src={user.photo}/>
        </div>
        <LanguageIcon />
        <Button>Add Question</Button>
        </div>
        </div>

    );
};

export default Navbar;