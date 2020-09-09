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
/**
 * VideosByLatest,
 *
 * same functionality as ArticlesByMostViewed
 *
 */
const VideosByLatest = () => {
  const [loading, setLoading] = useState(true);
  const [secondEffectMayBeCalled, setSecondEffectMayBeCalled] = useState(false);
  const {
    videosByLatest,
    setVideosByLatest,
    pageNumberVideosByLatest,
    setPageNumberVideosByLatest,
    pageSizeVideosByLatest,
    setPageSizeVideosByLatest,
  } = useContext(PublicContext);

  useEffect(() => {
    if (videosByLatest.length === 0) {
      videosectionReadAllByDatePaginated(
        pageNumberVideosByLatest,
        pageSizeVideosByLatest
      )
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.length < 5) {
            setPageSizeVideosByLatest(0);
          }
          setLoading(false);
          setVideosByLatest(responseJson);
        })
        .catch((error) => console.log(error));
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (videosByLatest.length !== 0 && secondEffectMayBeCalled) {
      videosectionReadAllByDatePaginated(
        pageNumberVideosByLatest,
        pageSizeVideosByLatest
      )
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.length < 5) {
            setPageSizeVideosByLatest(0);
          }
          setVideosByLatest([...videosByLatest, ...responseJson]);
          setLoading(false);
          setSecondEffectMayBeCalled(false);
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumberVideosByLatest]);

  const handleClickLoadMore = () => {
    setLoading(true);
    setSecondEffectMayBeCalled(true);
    setPageNumberVideosByLatest((prevPageNumber) => prevPageNumber + 1);
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
                {videosByLatest &&
                  videosByLatest.map((video, i) => {
                    return <VideoCard key={i} video={video} />;
                  })}
                {pageSizeVideosByLatest !== 0 ? (
                  <div className="load-more-btn-wrapper">
                    {" "}
                    <button
                      className="load-more-btn"
                      onClick={handleClickLoadMore}
                    >
                      Ucitaj još
                    </button>
                  </div>
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
