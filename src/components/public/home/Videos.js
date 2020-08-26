import React, { useState } from "react";
// import helpers
import ReactPlayer from "react-player/youtube";

const Videos = (props) => {
  const [mainVideoUrl, setMainVideoUrl] = useState("");

  React.useEffect(() => {
    setMainVideoUrl(props.videos[0].videoUrl);
  }, [props.videos]);

  const handleClickChangeUrl = (video) => {
    setMainVideoUrl(video.videoUrl);
  };

  function YouTubeGetID(url) {
    var ID = "";
    url = url
      .replace(/(>|<)/gi, "")
      .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\\-]/i);
      ID = ID[0];
    } else {
      ID = url;
    }
    return ID;
  }

  const displayVideos = () => (
    <>
      <div className="grid-item-video">
        <div className="video-display-header">Najnoviji video</div>
        <div className="video-grid">
          <div className="video-display-main">
            <ReactPlayer
              url={mainVideoUrl}
              controls={true}
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="video-display-secondary">
            {props.videos.map((video, i) => (
              <div
                className="secondary-video"
                onClick={() => handleClickChangeUrl(video)}
                key={i}
                style={{
                  backgroundImage: `url(https://img.youtube.com/vi/${YouTubeGetID(
                    video.videoUrl
                  )}/mqdefault.jpg)`,
                }}
              >
                <div className="video-icon">
                  <i className="tiny material-icons">play_circle_outline</i>
                </div>
                <div className="video-text">{video.header}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
  return <>{displayVideos()}</>;
};

export default Videos;
