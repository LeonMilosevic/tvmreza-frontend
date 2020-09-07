import React, { useState, useEffect } from "react";
// helpers
import { useLocation, Redirect } from "react-router-dom";
import { articleReadByCategory } from "../../api/publicApi";
// components
import NavTop from "../../navs/NavTop";
import NavMiddle from "../../navs/NavMiddle";
import NavBottom from "../../navs/NavBottom";
import Sidebanners from "../../reusable/Sidebanners";
import ArticleCard from "../../reusable/ArticleCard";
import Footerbanners from "../../reusable/Footerbanners";
import Footer from "../../reusable/Footer";

const ArticlesByCategory = () => {
  const [articlesByCategory, setArticlesByCategory] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const location = useLocation();

  useEffect(() => {
    articleReadByCategory(location.category.id, pageNumber, 5)
      .then((response) => response.json())
      .then((responseJson) => setArticlesByCategory(responseJson))
      .catch((error) => console.log(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const displayArticlesByCategory = () => (
    <>
      <NavTop />
      <NavMiddle />
      <NavBottom />
      {articlesByCategory && (
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
              {articlesByCategory.map((article, i) => (
                <ArticleCard key={i} article={article} />
              ))}
            </div>
            <div className="col s2 m2 offset-s1 offset-m1">
              <Sidebanners />
            </div>
          </div>
        </div>
      )}
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
