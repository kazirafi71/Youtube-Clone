import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./Video.css";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 220,
    margin: 10,
  },
  media: {
    height: 140,
  },
});

const Video = ({ thumbPic, title, avatarPic, channelName, views, time }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={thumbPic} />
        <CardContent className="card__content__body">
          <div className="card__avatar">
            <Avatar src={avatarPic}></Avatar>
          </div>
          <div className="card__content">
            <Typography className='' component='' style={{fontSize:"18px"}} variant="h6" >
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="">
              {channelName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {views} views . {time}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Video;
