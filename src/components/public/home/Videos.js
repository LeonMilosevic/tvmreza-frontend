import React, { useState } from "react";
// import helpers
import ReactPlayer from "react-player/youtube";
import { YouTubeGetID } from "../../utils/youtubeImageFunction";
import { Link } from "react-router-dom";

import { PublicContext } from "../../context/public/PublicContext";

/**
 * Videos home component, on mount, we set the main video to be displayed. On a side videos click, we change the state to display the video clicked.
 * Side videos are only images pulled from youtube thumbnails.
 *
 */
const Videos = () => {
  const [mainVideoUrl, setMainVideoUrl] = useState("");

  const { videoByDateOnly8 } = React.useContext(PublicContext);

  React.useEffect(() => {
    setMainVideoUrl(videoByDateOnly8[0].videoUrl);
  }, [videoByDateOnly8]);

  const handleClickChangeUrl = (video) => {
    setMainVideoUrl(video.videoUrl);
  };

  const displayVideos = () => (
    <>
      <div className="grid-item-video">
        <div className="video-display-header">
          <Link className="empty-link" to="/video/poslednji">
            Najnoviji video
          </Link>
        </div>
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
            {videoByDateOnly8.map((video, i) => (
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
