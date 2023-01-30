import React from 'react';
import "./topbar.css";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import profile_pic from "../../images/profile_pic.jpg"; 
function topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'>My Dashboard</span>
            </div>
            <div className="topRight">
                <div className="topbarIcons">
                   <NotificationsNoneIcon/>
                </div>
                <div className="topbarIcons">
                   <SettingsIcon />
                </div>
                <div className="topbarIcons">
                   <BookmarkBorderIcon />
                </div>
               
                <img src={profile_pic} alt="profile-pic" className='topAvatar' />
            </div>
        </div>
    </div>
  )
}

export default topbar;