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
/**
 * ArticlesByCategory components, here we will accept a category id passed from location function from react-router-dom,
 * then we will make an api call to the server to populate the local state (we are using local state because user can go on any category multiple times, and categories are not static, that means there can be many categories added by administrator and thats why we are not having a specific state for each category)
 *
 * We are using pagination on this component, in order to avoid unnecessary long and expensive transaction from the database.
 *
 * Pagination logic: we pass a query of pagenumber we want to be and pagesize(amount of items to be retrieved).
 * If the pagesize is lower then 5 after the call is made, that means there are no more items left to query from, so we disable the load more button.
 *
 */
const ArticlesByCategory = () => {
  const [articlesByCategory, setArticlesByCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // on each new location update, we reset the whole component state, to avoid mixing articles and pageNumber from different categories.
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
    // this is a second useEffect, we use it to make a 2nd+ pagination call

    // we check the length since we dont want to make another call if it was the first time visiting this component.
    if (articlesByCategory.length !== 0) {
      articleReadByCategory(location.state.id, pageNumber, 5)
        .then((response) => response.json())
        .then((responseJson) => {
          setLoading(false);
          // we use spread operator to re-populate the state with previous articles and new articles
          setArticlesByCategory([...articlesByCategory, ...responseJson]);
        })
        .catch((error) => console.log(error));
    }
    // we use pageNumber, since we want to call this hook every time pageNumber is updated or changed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const handleClickLoadMore = () => {
    setLoading(true);
    // we update the pageNumber from the previous state by +1
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
                      Ucitaj još
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
