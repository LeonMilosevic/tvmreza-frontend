import React, { useState } from "react";

export const PublicContext = React.createContext();

/**
 * We will populate states when the specific page loads,
 * so that the user doesnt have to send requests to the db
 * every time he visits the page for the second time
 *
 */

export const PublicProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [articlesByKeyword, setArticlesByKeyword] = useState([]);
  const [articlesByLatest, setArticlesByLatest] = useState([]);
  const [pageNumberArticlesByLatest, setPageNumberArticlesByLatest] = useState(
    0
  );
  const [pageSizeArticlesByLatest, setPageSizeArticlesByLatest] = useState(5);
  const [articlesLatestOnly8, setArticlesLatestOnly8] = useState([]);
  const [articlesByMostPopular, setArticlesByMostPopular] = useState([]);
  const [
    pageNumberArticlesByMostPopular,
    setPageNumberArticlesByMostPopular,
  ] = useState(0);
  const [
    pageSizeArticlesByMostPopular,
    setPageSizeArticlesByMostPopular,
  ] = useState(5);
  const [articlesMostPopularOnly8, setArticlesMostPopularOnly8] = useState([]);
  const [
    articlesByCategorySlicedHome,
    setArticlesByCategorySlicedHome,
  ] = useState([]);
  const [sideBanners, setSideBanners] = useState([]);
  const [footerBanners, setFooterBanners] = useState([]);
  const [navPages, setNavPages] = useState([]);
  const [sporazum, setSporazum] = useState([]);
  const [pageNumberSporazum, setPageNumberSporazum] = useState(0);
  const [pageSizeSporazum, setPageSizeSporazum] = useState(5);
  const [tvlica, setTvlica] = useState([]);
  const [videosByLatest, setVideosByLatest] = useState([]);
  const [pageNumberVideosByLatest, setPageNumberVideosByLatest] = useState(0);
  const [pageSizeVideosByLatest, setPageSizeVideosByLatest] = useState(5);
  const [videoByDateOnly8, setVideoByDateOnly8] = useState([]);
  const [survey, setSurvey] = useState({});
  const [keywordError, setKeywordError] = useState("");
  // loaders
  const [loading, setLoading] = useState(true);
  const [homeLoaded, setHomeLoaded] = useState(false);
  const [
    homeArticlesByCategoryLoaded,
    setHomeArticlesByCategoryLoaded,
  ] = useState(false);
  return (
    <PublicContext.Provider
      value={{
        categories,
        setCategories,
        articlesByCategorySlicedHome,
        setArticlesByCategorySlicedHome,
        articlesByKeyword,
        setArticlesByKeyword,
        articlesByLatest,
        setArticlesByLatest,
        pageNumberArticlesByLatest,
        setPageNumberArticlesByLatest,
        pageSizeArticlesByLatest,
        setPageSizeArticlesByLatest,
        articlesByMostPopular,
        setArticlesByMostPopular,
        pageNumberArticlesByMostPopular,
        setPageNumberArticlesByMostPopular,
        pageSizeArticlesByMostPopular,
        setPageSizeArticlesByMostPopular,
        articlesLatestOnly8,
        setArticlesLatestOnly8,
        articlesMostPopularOnly8,
        setArticlesMostPopularOnly8,
        sideBanners,
        setSideBanners,
        footerBanners,
        setFooterBanners,
        navPages,
        setNavPages,
        sporazum,
        setSporazum,
        pageNumberSporazum,
        setPageNumberSporazum,
        pageSizeSporazum,
        setPageSizeSporazum,
        tvlica,
        setTvlica,
        videosByLatest,
        setVideosByLatest,
        pageNumberVideosByLatest,
        setPageNumberVideosByLatest,
        pageSizeVideosByLatest,
        setPageSizeVideosByLatest,
        videoByDateOnly8,
        setVideoByDateOnly8,
        survey,
        setSurvey,
        keywordError,
        setKeywordError,
        loading,
        setLoading,
        homeLoaded,
        setHomeLoaded,
        homeArticlesByCategoryLoaded,
        setHomeArticlesByCategoryLoaded,
      }}
    >
      {children}
    </PublicContext.Provider>
  );
};
