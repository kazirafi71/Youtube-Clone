import React, { useEffect, useState } from "react";
import "./RecomendedVideo.css";
import Video from "./Video/Video";
import SpinnerLoading from "../spinner/SpinnerLoading";
import moment from "moment";

const RecomendedVideo = () => {
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [videoDuration, seVideoDuration] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=BD&key=${process.env.REACT_APP_MY_API} &maxResults=40`
    )
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        setVideoData(data.items);
      })
      .catch((err) => console.log(err));
  }, []);
 
//   useEffect(() => {
//     videoData && videoData.map((val) => {
//         const s = moment.duration(val.contentDetails.duration).asSeconds();
//        let  _duration = moment.utc(s * 1000).format("mm:ss");
//         console.log(_duration);
//       });
//   }, [videoData]);

  return (
    <div className="recommended">
      <h2>Recommended </h2>
      <div className="recommended__videos">
        {loading && (
          <div className="m-auto mt-5">
            <SpinnerLoading />
          </div>
        )}
        {videoData &&
          videoData.map((val) => {
            // {
            //   const s = moment
            //     .duration(val.contentDetails.duration)
            //     .asSeconds();
            //   const _duration = moment.utc(s * 1000).format("mm:ss");
            //  setVideoData(_duration);
            // }
            return (
              <Video
                key={val.id}
                thumbPic={val.snippet.thumbnails.high.url}
                title={val.snippet.localized.title}
                avatarPic={val.snippet.thumbnails.medium.url}
                channelName={val.snippet.channelTitle}
                views={val.statistics.viewCount}
                time={val.snippet.publishedAt}
                durationVideo={val.contentDetails.duration}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RecomendedVideo;
