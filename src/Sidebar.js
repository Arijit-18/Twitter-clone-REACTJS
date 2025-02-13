import React from 'react'
// import the css file of the sidebar 
import './Sidebar.css'
// import the twitter icon from the metirial ui 
import TwitterIcon from '@mui/icons-material/Twitter'
// import the sidebarOption 
import SidebarOption from './SidebarOption'
// import the home icon from the metirial ui 
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function Sidebar() {
  return (
    <div className='sidebar'>

        {/* twitter icon */}
        <TwitterIcon/> 

        <SidebarOption Icon={HomeIcon} text="Home"/>
        <SidebarOption Icon={SearchIcon} text="Explore"/>
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
        <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
        <SidebarOption Icon={ListAltIcon} text="Lists"/>
        <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
        <SidebarOption Icon={MoreHorizIcon} text="More"/>
        
        {/* sidebar options */}
        {/* sidebar options */}
        {/* sidebar options */}
        {/* sidebar options */}
        {/* sidebar options */}
        {/* sidebar options */}
        {/* sidebar options */}

        {/* after all the buttons we have a tweet button */}
        {/* button -> tweet */}
      
    </div>
  )
}

export default Sidebar
