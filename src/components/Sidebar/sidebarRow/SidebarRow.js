import { Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import "./sidebarRow.css";
import { useHistory } from "react-router";

const SidebarRow = ({ logOut, selected, Icon, title }) => {
  const history=useHistory()
  const setLogoutHandler=()=>{
    localStorage.clear("user")
  }

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(()=>{
    if(!user){
      history.push('/login')
    }
  },[user])
  return (
    <div
    onClick={logOut &&  setLogoutHandler}
      
      className={`sidebarRow ${selected && `selected__row`}`}
    >
      <div className={`sidebarRow__icon `}>
        <Icon />
      </div>
      <div className={``}>
        <Typography variant="body2">{title}</Typography>
      </div>
    </div>
  );
};

export default SidebarRow;
