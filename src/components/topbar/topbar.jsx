import React from 'react';
import "./topbar.css";
import profile_pic from "../../images/profile_pic.jpg"; 
function topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'>MyDashboard</span>
            </div>
            <div className="topRight">
                <div className="topbarIcons">
                   <span>Notification</span>
                </div>
                <img src={profile_pic} alt="profile-pic" className='topAvatar' />
            </div>
        </div>
    </div>
  )
}

export default topbar;