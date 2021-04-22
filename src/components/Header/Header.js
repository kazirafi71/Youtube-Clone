import React, { useState } from "react";
import "./Header.css";
import DehazeIcon from "@material-ui/icons/Dehaze";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = () => {
  const [inputSearch,setInputSearch]=useState('')

  const searchHandler=(e)=>{
    e.preventDefault()
    

  }
  return (
    <div className="header">
      <div className="left__header">
        <IconButton>
        <DehazeIcon />
        </IconButton>
        <Link to='/'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
          alt=""
        /></Link>
      </div>
      
      <div   className="search__bar">
        <input onChange= {(e)=>setInputSearch(e.target.value)} type="text" placeholder='Search' />
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon  style={{cursor:"pointer"}}  />
        </Link>
        
        
      </div>
      <div className="right__header">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar  />
      </div>
    </div>
  );
};

export default Header;
