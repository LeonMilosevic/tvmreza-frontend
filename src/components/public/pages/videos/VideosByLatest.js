import React, { useContext, useState, useEffect } from "react";
// import helpers
import { PublicContext } from "../../../context/public/PublicContext";
import { videosectionReadAllByDatePaginated } from "../../api/publicApi";
import SpinnerDots from "../../ui/SpinnerDots";
import NavTop from "../../navs/NavTop";
import NavMiddle from "../../navs/NavMiddle";
import NavBottom from "../../navs/NavBottom";
import Sidebanners from "../../reusable/Sidebanners";
import VideoCard from "../../reusable/VideoCard";
import Footerbanners from "../../reusable/Footerbanners";
import Footer from "../../reusable/Footer";

const VideosByLatest = () => {
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const { videosByLatest, setVideosByLatest } = useContext(PublicContext);

  useEffect(() => {
    videosectionReadAllByDatePaginated(pageNumber, pageSize)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.length < 5) {
          setPageSize(0);
        }
        setLoading(false);
        setVideosByLatest(responseJson);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickLoadMore = () => {
    setLoading(true);
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
    videosectionReadAllByDatePaginated(pageNumber, pageSize)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.length < 5) {
          setPageSize(0);
        }
        setVideosByLatest([...videosByLatest, ...responseJson]);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const displayVideosByLatest = () => (
    <>
      <NavTop />
      <NavMiddle />
      <NavBottom />
      {loading ? (
        <SpinnerDots />
      ) : (
        <>
          <div className="container">
            <div className="row margin-top2">
              <div className="col s9 m9">
                <div className="video-display-header">Poslednji video</div>
              </div>
            </div>
            <div className="row">
              <div className="col s9 m9">
                {/* {videosByLatest &&
                  videosByLatest.map((video, i) => {
                    return <VideoCard key={i} video={video} />;
                  })} */}
                {pageSize !== 0 ? (
                  <button onClick={handleClickLoadMore}>Load more</button>
                ) : (
                  ""
                )}
              </div>
              <div className="col s2 m2 offset-s1 offset-m1">
                <Sidebanners />
              </div>
            </div>
          </div>
          <Footerbanners />
          <Footer />
        </>
      )}
    </>
  );

  return <>{displayVideosByLatest()}</>;
};

export default VideosByLatest;
