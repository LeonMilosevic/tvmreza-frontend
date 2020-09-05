import React, { useContext } from "react";
// import helpers
import { PublicContext } from "../../../context/public/PublicContext";
import { useLocation } from "react-router-dom";
// import components
import NavTop from "../../navs/NavTop";
import NavMiddle from "../../navs/NavMiddle";
import NavBottom from "../../navs/NavBottom";
import Sidebanners from "../../reusable/Sidebanners";
import ArticleCard from "../../reusable/ArticleCard";
import Footerbanners from "../../reusable/Footerbanners";
import Footer from "../../reusable/Footer";

const ArticlesByKeyword = () => {
  const { keywordError, articlesByKeyword } = useContext(PublicContext);
  const location = useLocation();
  return (
    <>
      <NavTop />
      <NavMiddle />
      <NavBottom />
      <div className="container">
        <div className="row margin-top2">
          <div className="col s9 m9">
            <div className="video-display-header">
              {keywordError ? keywordError : location.pathname.split("/").pop()}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s9 m9">
            {articlesByKeyword.map((article, i) => (
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
};

export default ArticlesByKeyword;
