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

const ArticlesByLatest = () => {
  const [loading, setLoading] = useState(true);
  const { articlesByLatest, setArticlesByLatest } = useContext(PublicContext);

  useEffect(() => {
    articlesReadOrderedByDate()
      .then((response) => response.json())
      .then((responseJson) => {
        setArticlesByLatest(responseJson);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [setArticlesByLatest]);

  const displayArticlesByLatest = () => (
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
                <div className="video-display-header">Poslednje vesti</div>
              </div>
            </div>
            <div className="row">
              <div className="col s9 m9">
                {articlesByLatest.map((article, i) => (
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

  return <>{displayArticlesByLatest()}</>;
};

export default ArticlesByLatest;
