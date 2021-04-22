import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import './SearchVideo.css'

const SearchVideo = ({image,title,channel,views,time}) => {
    
  return (
   
      <>
        <div className="searchVideo">
          <div className="searchVideo__card__image">
            <img
              src={image}
              alt=""
            />
          </div>
          <div className="searchVideo__content">
            <p>{title}</p>
            <span>{channel}</span>
            <br />
            <span>{views} .</span>
            <span>{time}</span>
          </div>
        </div>
      </>
   
  );
};

export default SearchVideo;
