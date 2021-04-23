import React from "react";
import TuneIcon from "@material-ui/icons/Tune";
import { Typography } from "@material-ui/core";
import "./SearchResult.css";
import Channel from "./channel/Channel";
import SearchVideo from "./searchVideo/SearchVideo";

const SearchResult = () => {
  return (
    <div className="searchResult">
      <div className="searchResult__filter">
        <TuneIcon style={{ color: "gray" }} />
        <Typography className="ml-3">Filter</Typography>
      </div>
      <hr />
      <div className="searchResult__channel">
        <Channel />
        <hr/>
        <SearchVideo 
        image='https://images.unsplash.com/photo-1567861911437-538298e4232c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        title='SHUNNO-"BEHULA" (OFFICIAL VIDEO)'
        channel="SUNNO BRAND"
        views="13M Views"
        time="1 month ago"
        />
        <SearchVideo 
        image='https://images.unsplash.com/photo-1563874257547-d19fbb71b46c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        title='SHUNNO-"BEHULA" (OFFICIAL VIDEO)'
        channel="SUNNO BRAND"
        views="13M Views"
        time="1 month ago"
        />
        <SearchVideo 
        image='https://images.unsplash.com/photo-1563874257547-d19fbb71b46c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
        title='SHUNNO-"BEHULA" (OFFICIAL VIDEO)'
        channel="SUNNO BRAND"
        views="13M Views"
        time="1 month ago"
        />
        <SearchVideo 
        image='https://images.unsplash.com/photo-1585984968562-1443b72fb0dc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVkaW8lMjB0aHVtYm5pbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
        title='SHUNNO-"BEHULA" (OFFICIAL VIDEO)'
        channel="SUNNO BRAND"
        views="13M Views"
        time="1 month ago"
        />
        <SearchVideo 
        image='https://images.unsplash.com/photo-1523365280197-f1783db9fe62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8eW91dHViZSUyMHZlZGlvJTIwdGh1bWJuaWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        title='SHUNNO-"BEHULA" (OFFICIAL VIDEO)'
        channel="SUNNO BRAND"
        views="13M Views"
        time="1 month ago"
        />
        
      </div>
    </div>
  );
};

export default SearchResult;
