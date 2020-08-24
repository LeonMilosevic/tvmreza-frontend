import React from "react";

const Videos = (props) => {
  const displayVideos = () => (
    <>
      {props.videos.map((video, i) => (
        <div key={i}>{video.header}</div>
      ))}
    </>
  );
  return <>{displayVideos()}</>;
};

export default Videos;
