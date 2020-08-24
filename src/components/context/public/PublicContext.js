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
  const [articles, setArticles] = useState([]);
  const [sideBanners, setSideBanners] = useState([]);
  const [footerBanners, setFooterBanners] = useState([]);
  const [navPages, setNavPages] = useState([]);
  const [sporazum, setSporazum] = useState([]);
  const [tvlica, setTvlica] = useState([]);
  const [video, setVideo] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <PublicContext.Provider
      value={{
        categories,
        setCategories,
        articles,
        setArticles,
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
        video,
        setVideo,
        loading,
        setLoading,
      }}
    >
      {children}
    </PublicContext.Provider>
  );
};
