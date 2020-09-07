import React, { useContext, useEffect } from "react";
// import components
import ArticleCardCategory from "./ArticleCardCategory";
// import helpers
import { PublicContext } from "../../../context/public/PublicContext";
import { articleReadByCategorySliced } from "../../api/publicApi";
const ArticlesByCategory = () => {
  const {
    categories,
    articlesByCategorySlicedHome,
    setArticlesByCategorySlicedHome,
    homeArticlesByCategoryLoaded,
    setHomeArticlesByCategoryLoaded,
  } = useContext(PublicContext);

  useEffect(() => {
    if (homeArticlesByCategoryLoaded === false) {
      articleReadByCategorySliced(categories[3].id)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("called");
          setArticlesByCategorySlicedHome(responseJson);
          setHomeArticlesByCategoryLoaded(true);
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);
  return (
    <>
      {articlesByCategorySlicedHome && (
        <div className="row margin-top-2">
          <div className="col s12 m12">
            <div className="article-by-category-header">
              {categories[3].categoryName}
            </div>
            <div className="articles-by-caregory-wrapper">
              <div className="row">
                {articlesByCategorySlicedHome.map((article, i) => (
                  <div key={i} className="col s12 m3">
                    <ArticleCardCategory article={article} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArticlesByCategory;
