import React, { useEffect } from "react";
// import components
import NavTop from "../navs/NavTop";
import NavMiddle from "../navs/NavMiddle";
import NavBottom from "../navs/NavBottom";
import Videos from "./Videos";
import SpinnerDots from "../ui/SpinnerDots";
// import helpers
import { PublicContext } from "../../context/public/PublicContext";
import {
  videosectionReadAllByDateOnly6,
  categoriesReadAllByDate,
  sidebannersReadAllOrdered,
} from "../api/publicApi";
import Sidebanners from "./Sidebanners";

const Home = () => {
  const {
    video,
    setVideo,
    categories,
    setCategories,
    articles,
    setArticles,
    sideBanners,
    setSideBanners,
    loading,
    setLoading,
  } = React.useContext(PublicContext);
  useEffect(() => {
    try {
      Promise.all([
        videosectionReadAllByDateOnly6().then((response) => response.json()),
        categoriesReadAllByDate().then((response) => response.json()),
        sidebannersReadAllOrdered().then((response) => response.json()),
      ]).then((responseJson) => {
        setVideo(responseJson[0]);
        setCategories(responseJson[1]);
        setSideBanners(responseJson[2]);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, [setVideo, setCategories, setLoading, setSideBanners]);
  return (
    <>
      {loading ? (
        <SpinnerDots />
      ) : (
        <>
          <NavTop />
          <NavMiddle />
          <NavBottom categories={categories} />
          <div className="container">
            <div className="row">
              <Videos videos={video} />
              <Sidebanners sidebanners={sideBanners} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
