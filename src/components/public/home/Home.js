import React, { useEffect } from "react";

// import helpers
import { PublicContext } from "../../context/public/PublicContext";
import {
  videosectionReadAllByDatePaginated,
  categoriesReadAllByOrdered,
  sidebannersReadAllOrdered,
  articlesReadOrderedByDate,
  articlesReadOrderedByMostViewed,
  surveyReadByTrue,
  footerBannerReadByOrder,
} from "../api/publicApi";
// import components
import NavTop from "../navs/NavTop";
import NavMiddle from "../navs/NavMiddle";
import NavBottom from "../navs/NavBottom";
import Videos from "./Videos";
import SpinnerDots from "../ui/SpinnerDots";
import Sidebanners from "../reusable/Sidebanners";
import ArticlesLatest from "./articles/ArticlesLatest";
import ArticlesMostPopular from "./articles/ArticlesMostPopular";
import Survey from "./survey/Survey";
import ArticlesByCategory from "./articles/ArticlesByCategory";
import Footerbanners from "../reusable/Footerbanners";
import Footer from "../reusable/Footer";

const Home = () => {
  const {
    setVideoByDateOnly8,
    setCategories,
    setArticlesLatestOnly8,
    setArticlesMostPopularOnly8,
    setSideBanners,
    setSurvey,
    setFooterBanners,
    loading,
    setLoading,
    homeLoaded,
    setHomeLoaded,
  } = React.useContext(PublicContext);
  useEffect(() => {
    if (homeLoaded === false) {
      try {
        Promise.all([
          videosectionReadAllByDatePaginated(0, 6).then((response) =>
            response.json()
          ),
          categoriesReadAllByOrdered().then((response) => response.json()),
          sidebannersReadAllOrdered().then((response) => response.json()),
          articlesReadOrderedByDate(0, 8).then((response) => response.json()),
          articlesReadOrderedByMostViewed(0, 8).then((response) =>
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
          setArticlesMostPopularOnly8(responseJson[4]);
          setSurvey(responseJson[5]);
          setFooterBanners(responseJson[6]);
          setLoading(false);
          setHomeLoaded(true);
        });
      } catch (error) {
        console.log(error);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {loading ? (
        <SpinnerDots />
      ) : (
        <>
          <NavTop />
          <NavMiddle />
          <NavBottom />
          <div className="container home-grid-container">
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
