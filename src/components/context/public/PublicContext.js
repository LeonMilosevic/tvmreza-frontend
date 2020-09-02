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
  const [articlesByLatest, setArticlesByLatest] = useState([]);
  const [articlesMostPopular, setArticlesMostPopular] = useState([]);
  const [articlesLatestOnly8, setArticlesLatestOnly8] = useState([]);
  const [articlesMostPopularOnly8, setArticlesMostPopularOnly8] = useState([]);
  const [sideBanners, setSideBanners] = useState([]);
  const [footerBanners, setFooterBanners] = useState([]);
  const [navPages, setNavPages] = useState([]);
  const [sporazum, setSporazum] = useState([]);
  const [tvlica, setTvlica] = useState([]);
  const [videosByLatest, setVideosByLatest] = useState([]);
  const [videoByDateOnly8, setVideoByDateOnly8] = useState([]);
  const [survey, setSurvey] = useState({});
  const [loading, setLoading] = useState(true);

  return (
    <PublicContext.Provider
      value={{
        categories,
        setCategories,
        articlesByLatest,
        setArticlesByLatest,
        articlesMostPopular,
        setArticlesMostPopular,
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
        tvlica,
        setTvlica,
        videosByLatest,
        setVideosByLatest,
        videoByDateOnly8,
        setVideoByDateOnly8,
        survey,
        setSurvey,
        loading,
        setLoading,
      }}
    >
      {children}
    </PublicContext.Provider>
  );
};
