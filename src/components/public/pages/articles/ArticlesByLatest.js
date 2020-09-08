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
  const [secondEffectMayBeCalled, setSecondEffectMayBeCalled] = useState(false);
  const {
    articlesByLatest,
    setArticlesByLatest,
    pageNumberArticlesByLatest,
    setPageNumberArticlesByLatest,
    pageSizeArticlesByLatest,
    setPageSizeArticlesByLatest,
  } = useContext(PublicContext);

  useEffect(() => {
    if (articlesByLatest.length === 0) {
      articlesReadOrderedByDate(
        pageNumberArticlesByLatest,
        pageSizeArticlesByLatest
      )
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.length < 5) {
            setPageSizeArticlesByLatest(0);
          }
          setLoading(false);
          setArticlesByLatest(responseJson);
        })
        .catch((error) => console.log(error));
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (articlesByLatest.length !== 0 && secondEffectMayBeCalled) {
      articlesReadOrderedByDate(
        pageNumberArticlesByLatest,
        pageSizeArticlesByLatest
      )
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.length < 5) {
            setPageSizeArticlesByLatest(0);
          }
          setArticlesByLatest([...articlesByLatest, ...responseJson]);
          setLoading(false);
          setSecondEffectMayBeCalled(false);
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumberArticlesByLatest]);

  const handleClickLoadMore = () => {
    setLoading(true);
    setSecondEffectMayBeCalled(true);
    setPageNumberArticlesByLatest((prevPageNumber) => prevPageNumber + 1);
  };

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
                {pageSizeArticlesByLatest !== 0 ? (
                  <div className="load-more-btn-wrapper">
                    <button
                      className="load-more-btn"
                      onClick={handleClickLoadMore}
                    >
                      Ucitaj još
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

  return <>{displayArticlesByLatest()}</>;
};

export default ArticlesByLatest;
