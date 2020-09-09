import React, { useContext, useState, useEffect } from "react";
// import helpers
import { PublicContext } from "../../../context/public/PublicContext";
import { sporazumReadAllOrdedred } from "../../api/publicApi";
// import components
import SpinnerDots from "../../ui/SpinnerDots";
import NavTop from "../../navs/NavTop";
import NavMiddle from "../../navs/NavMiddle";
import NavBottom from "../../navs/NavBottom";
import Sidebanners from "../../reusable/Sidebanners";
import VideoCard from "../../reusable/VideoCard";
import Footerbanners from "../../reusable/Footerbanners";
import Footer from "../../reusable/Footer";
/**
 * SporazumByLatest,
 *
 * same functionality as ArticlesByMostViewed
 *
 */
const SporazumByLatest = () => {
  const [loading, setLoading] = useState(true);
  const [secondEffectMayBeCalled, setSecondEffectMayBeCalled] = useState(false);
  const {
    sporazum,
    setSporazum,
    pageNumberSporazum,
    setPageNumberSporazum,
    pageSizeSporazum,
    setPageSizeSporazum,
  } = useContext(PublicContext);

  useEffect(() => {
    if (sporazum.length === 0) {
      sporazumReadAllOrdedred(pageNumberSporazum, pageSizeSporazum)
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.length < 5) {
            setPageSizeSporazum(0);
          }
          setLoading(false);
          setSporazum(responseJson);
        })
        .catch((error) => console.log(error));
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sporazum.length !== 0 && secondEffectMayBeCalled) {
      sporazumReadAllOrdedred(pageNumberSporazum, pageSizeSporazum)
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.length < 5) {
            setPageSizeSporazum(0);
          }
          setSporazum([...sporazum, ...responseJson]);
          setLoading(false);
          setSecondEffectMayBeCalled(false);
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumberSporazum]);

  const handleClickLoadMore = () => {
    setLoading(true);
    setSecondEffectMayBeCalled(true);
    setPageNumberSporazum((prevPageNumber) => prevPageNumber + 1);
  };

  const displaySporazumByLatest = () => (
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
                <div className="video-display-header">
                  Poslednji Sporazum Video
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s9 m9">
                {sporazum.map((video, i) => (
                  <VideoCard key={i} video={video} />
                ))}
                {pageSizeSporazum !== 0 ? (
                  <div className="load-more-btn-wrapper">
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

  return <>{displaySporazumByLatest()}</>;
};

export default SporazumByLatest;
