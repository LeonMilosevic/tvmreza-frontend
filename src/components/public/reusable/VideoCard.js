import React from "react";
// import helpers
import ReactPlayer from "react-player/youtube";
import parse from "html-react-parser";

const VideoCard = (props) => {
  console.log(props.video);
  return (
    <div className="videopage-card">
      <div className="videopage-card-videowrapper">
        <ReactPlayer
          url={props.video.videoUrl}
          controls={true}
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="videopage-card-textwrapper">
        <div className="videopage-card-header">{props.video.header}</div>
        <div className="videopage-card-content">
          {parse(props.video.content)}
        </div>
        <div className="videopage-card-subcontent">
          <div>
            Lokacija:{" "}
            <span className="videopage-card-subcontent-text">
              {props.video.location}
            </span>
          </div>
          <div>
            Datum:{" "}
            <span className="videopage-card-subcontent-text">
              {props.video.dateDisplay.slice(0, 10)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
