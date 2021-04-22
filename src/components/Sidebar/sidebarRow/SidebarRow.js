import { Typography } from "@material-ui/core";
import React from "react";
import "./sidebarRow.css";

const SidebarRow = ({selected , Icon, title }) => {
  return (
    <div className={`sidebarRow ${selected && `selected__row`}` }>
      <div className={`sidebarRow__icon `}>
        <Icon />
      </div>
      <div className="">
        <Typography variant='body2' >{title}</Typography>
      </div>
    </div>
  );
};

export default SidebarRow;
