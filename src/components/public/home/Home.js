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
  articlesReadOrderedOnly8,
  articlesReadOrderedByMostViewedOnly8,
} from "../api/publicApi";
import Sidebanners from "./Sidebanners";
import Articles from "./articles/Articles";
import ArticlesMostPopular from "./articles/ArticlesMostPopular";

const Home = () => {
  const {
    video,
    setVideo,
    categories,
    setCategories,
    articles,
    setArticles,
    popularArticles,
    setPopularArticles,
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
        articlesReadOrderedOnly8().then((response) => response.json()),
        articlesReadOrderedByMostViewedOnly8().then((response) =>
          response.json()
        ),
      ]).then((responseJson) => {
        setVideo(responseJson[0]);
        setCategories(responseJson[1]);
        setSideBanners(responseJson[2]);
        setArticles(responseJson[3]);
        setPopularArticles(responseJson[4]);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, [
    setVideo,
    setCategories,
    setLoading,
    setSideBanners,
    setArticles,
    setPopularArticles,
  ]);
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
            <div className="home-grid">
              <Videos videos={video} />
              <Sidebanners sidebanners={sideBanners} />
              <Articles articles={articles} />
              <ArticlesMostPopular articles={popularArticles} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
