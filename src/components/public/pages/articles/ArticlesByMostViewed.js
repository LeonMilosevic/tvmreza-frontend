import React, { useState, useEffect, useContext } from "react";
// import helpers
import { articlesReadOrderedByDate } from "../../api/publicApi";
import { PublicContext } from "../../../context/public/PublicContext";
// import components
import Sidebanners from "../../reusable/Sidebanners";
import ArticleCard from "../../reusable/ArticleCard";
import SpinnerDots from "../../ui/SpinnerDots";
import NavTop from "../../navs/NavTop";
import NavMiddle from "../../navs/NavMiddle";
import NavBottom from "../../navs/NavBottom";
import Footerbanners from "../../reusable/Footerbanners";
import Footer from "../../reusable/Footer";

const ArticlesByMostViewed = () => {
  const [loading, setLoading] = useState(true);
  const { articlesMostPopular, setArticlesMostPopular } = useContext(
    PublicContext
  );

  useEffect(() => {
    articlesReadOrderedByDate()
      .then((response) => response.json())
      .then((responseJson) => {
        setArticlesMostPopular(responseJson);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [setArticlesMostPopular]);

  const displayArticlesByMostViewed = () => (
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
                <div className="video-display-header">Najpopularnije vesti</div>
              </div>
            </div>
            <div className="row">
              <div className="col s9 m9">
                {articlesMostPopular.map((article, i) => (
                  <ArticleCard key={i} article={article} />
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

  return <>{displayArticlesByMostViewed()}</>;
};

export default ArticlesByMostViewed;
