import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "./Video.css";
import { Avatar } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import moment from "moment";
import numeral from "numeral";



const useStyles = makeStyles({
  root: {
    width: 220,
    margin: 10,
  },
  media: {
    height: 140,
  },
});

const Video = ({
  thumbPic,
  title,
  avatarPic,
  channelName,
  views,
  time,
  durationVideo,
}) => {
  const classes = useStyles();
  const s = moment.duration(durationVideo).asSeconds();
  let _duration = moment.utc(s * 1000).format("mm:ss");
  console.log(_duration);
  return (
    <Card className="card__video">
      <CardActionArea>
        <CardMedia className="image__style">
          <img className="img-fluid" src={thumbPic} alt="" />
          <p className="content">{_duration}</p>
        </CardMedia>

        <CardContent className="card__content__body">
          <div className="card__avatar">
            <Avatar src={avatarPic}></Avatar>
          </div>
          <div className="card__content">
            <Typography
              className="video__title"
              component=""
              style={{ fontSize: "14px" }}
              variant="h6"
            >
              {title && title.split("").splice(0, 50)}...
            </Typography>
            <Typography
              className="video__info"
              variant="body2"
              color="textSecondary"
              component=""
            >
              {channelName}
              <br></br>
              <Visibility fontSize="small" /> {numeral(views).format("0.a")} views .
              {moment(time).fromNow()}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Video;
