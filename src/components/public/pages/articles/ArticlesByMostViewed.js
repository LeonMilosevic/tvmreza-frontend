import React, { useState, useEffect, useContext } from "react";
// import helpers
import { articlesReadOrderedByMostViewed } from "../../api/publicApi";
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
  const [secondEffectMayBeCalled, setSecondEffectMayBeCalled] = useState(false);
  const {
    articlesByMostPopular,
    setArticlesByMostPopular,
    pageNumberArticlesByMostPopular,
    setPageNumberArticlesByMostPopular,
    pageSizeArticlesByMostPopular,
    setPageSizeArticlesByMostPopular,
  } = useContext(PublicContext);

  useEffect(() => {
    if (articlesByMostPopular.length === 0) {
      articlesReadOrderedByMostViewed(
        pageNumberArticlesByMostPopular,
        pageSizeArticlesByMostPopular
      )
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.length < 5) {
            setPageSizeArticlesByMostPopular(0);
          }
          setLoading(false);
          setArticlesByMostPopular(responseJson);
        })
        .catch((error) => console.log(error));
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (articlesByMostPopular.length !== 0 && secondEffectMayBeCalled) {
      articlesReadOrderedByMostViewed(
        pageNumberArticlesByMostPopular,
        pageSizeArticlesByMostPopular
      )
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.length < 5) {
            setPageSizeArticlesByMostPopular(0);
          }
          setArticlesByMostPopular([...articlesByMostPopular, ...responseJson]);
          setLoading(false);
          setSecondEffectMayBeCalled(false);
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumberArticlesByMostPopular]);

  const handleClickLoadMore = () => {
    setLoading(true);
    setSecondEffectMayBeCalled(true);
    setPageNumberArticlesByMostPopular((prevPageNumber) => prevPageNumber + 1);
  };

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
                {articlesByMostPopular.map((article, i) => (
                  <ArticleCard key={i} article={article} />
                ))}
                {pageSizeArticlesByMostPopular !== 0 ? (
                  <div className="load-more-btn-wrapper">
                    <button
                      className="load-more-btn"
                      onClick={handleClickLoadMore}
                    >
                      Load more
                    </button>
                  </div>
                ) : (
                  ""
                )}
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
