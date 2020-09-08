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
import SpinnerDots from "../../ui/SpinnerDots";

const ArticlesByCategory = () => {
  const [articlesByCategory, setArticlesByCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setArticlesByCategory([]);
    setPageNumber(0);
    articleReadByCategory(location.state.id, 0, 5)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setLoading(false);
        setArticlesByCategory(responseJson);
      })
      .catch((error) => console.log(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  useEffect(() => {
    console.log("called second");
    if (articlesByCategory.length !== 0) {
      articleReadByCategory(location.state.id, pageNumber, 5)
        .then((response) => response.json())
        .then((responseJson) => {
          setLoading(false);
          setArticlesByCategory([...articlesByCategory, ...responseJson]);
        })
        .catch((error) => console.log(error));
    }
  }, [pageNumber]);

  const handleClickLoadMore = () => {
    setLoading(true);
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const displayArticlesByCategory = () => (
    <>
      <NavTop />
      <NavMiddle />
      <NavBottom />
      {loading ? (
        <SpinnerDots />
      ) : (
        <>
          {articlesByCategory && (
            <div className="container">
              <div className="row margin-top2">
                <div className="col s9 m9">
                  <div className="video-display-header">
                    {location.state.categoryName}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col s9 m9">
                  {articlesByCategory.map((article, i) => (
                    <ArticleCard key={i} article={article} />
                  ))}
                  <div className="load-more-btn-wrapper">
                    <button
                      className="load-more-btn"
                      onClick={handleClickLoadMore}
                    >
                      Load more
                    </button>
                  </div>
                </div>
                <div className="col s2 m2 offset-s1 offset-m1">
                  <Sidebanners />
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <Footerbanners />
      <Footer />
    </>
  );
  return (
    <>
      {location.state === undefined ? (
        <Redirect to="/" />
      ) : (
        displayArticlesByCategory()
      )}
    </>
  );
};

export default ArticlesByCategory;
