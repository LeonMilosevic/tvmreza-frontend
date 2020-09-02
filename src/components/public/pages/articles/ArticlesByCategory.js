import React from "react";
import { useLocation, Redirect } from "react-router-dom";
import NavTop from "../../navs/NavTop";
import NavMiddle from "../../navs/NavMiddle";
import NavBottom from "../../navs/NavBottom";
import Sidebanners from "../../reusable/Sidebanners";
import ArticleCard from "../../reusable/ArticleCard";
import Footerbanners from "../../reusable/Footerbanners";
import Footer from "../../reusable/Footer";

const ArticlesByCategory = () => {
  const location = useLocation();

  const displayArticlesByCategory = () => (
    <>
      <NavTop />
      <NavMiddle />
      <NavBottom />
      <div className="container">
        <div className="row margin-top2">
          <div className="col s9 m9">
            <div className="video-display-header">
              {location.category.categoryName}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s9 m9">
            {location.category.articles.map((article, i) => (
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
  );

  return (
    <>
      {location.category === undefined ? (
        <Redirect to="/" />
      ) : (
        displayArticlesByCategory()
      )}
    </>
  );
};

export default ArticlesByCategory;
