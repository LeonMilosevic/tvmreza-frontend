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
  surveyReadByTrue,
  footerBannerReadByOrder,
} from "../api/publicApi";
import Sidebanners from "./Sidebanners";
import ArticlesLatest from "./articles/ArticlesLatest";
import ArticlesMostPopular from "./articles/ArticlesMostPopular";
import Survey from "./survey/Survey";
import ArticlesByCategory from "./articles/ArticlesByCategory";
import Footerbanners from "./Footerbanners";
import Footer from "./Footer";

const Home = () => {
  const {
    setVideoByDateOnly8,
    setCategories,
    setArticlesLatestOnly8,
    setPopularArticles,
    setSideBanners,
    setSurvey,
    setFooterBanners,
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
        surveyReadByTrue().then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            return undefined;
          }
        }),
        footerBannerReadByOrder().then((response) => response.json()),
      ]).then((responseJson) => {
        setVideoByDateOnly8(responseJson[0]);
        setCategories(responseJson[1]);
        setSideBanners(responseJson[2]);
        setArticlesLatestOnly8(responseJson[3]);
        setPopularArticles(responseJson[4]);
        setSurvey(responseJson[5]);
        setFooterBanners(responseJson[6]);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, [
    setVideoByDateOnly8,
    setCategories,
    setLoading,
    setSideBanners,
    setArticlesLatestOnly8,
    setPopularArticles,
    setSurvey,
    setFooterBanners,
  ]);
  return (
    <>
      {loading ? (
        <SpinnerDots />
      ) : (
        <>
          <NavTop />
          <NavMiddle />
          <NavBottom />
          <div className="container">
            <div className="home-grid">
              <Videos />
              <Sidebanners />
              <ArticlesLatest />
              <ArticlesMostPopular />
              <Survey />
            </div>
            <ArticlesByCategory />
            <Footerbanners />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
