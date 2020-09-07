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

const SporazumByLatest = () => {
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const { sporazum, setSporazum } = useContext(PublicContext);
  useEffect(() => {
    sporazumReadAllOrdedred(pageNumber, 5)
      .then((response) => response.json())
      .then((responseJson) => {
        setSporazum(responseJson);
        setLoading(false);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSporazum]);

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
