import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesMostPopular = (props) => {
  return (
    <div className="grid-item-mostpopular">
      <div className="popular-display-header">Najpopularnije vesti</div>
      {props.articles.map((article) => (
        <ArticleCard article={article} />
      ))}
    </div>
  );
};

export default ArticlesMostPopular;
