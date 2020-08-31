import React, { useContext, useState, useEffect } from "react";
// import components
import ArticleCardCategory from "./ArticleCardCategory";
// import helpers
import { PublicContext } from "../../../context/public/PublicContext";

const ArticlesByCategory = () => {
  const { categories } = useContext(PublicContext);
  const [articlesFromCategory, setArticlesFromCategory] = useState([]);
  useEffect(() => {
    setArticlesFromCategory(categories[3].articles.slice(0, 4));
  }, [categories]);
  return (
    <div className="row margin-top-2">
      <div className="col s12 m12">
        <div className="article-by-category-header">
          {categories[3].categoryName}
        </div>
        <div className="articles-by-caregory-wrapper">
          <div className="row">
            {articlesFromCategory.map((article, i) => (
              <div key={i} className="col s12 m3">
                <ArticleCardCategory article={article} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesByCategory;
