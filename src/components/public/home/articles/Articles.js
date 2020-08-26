import React from "react";
import ArticleCard from "./ArticleCard";

const Articles = (props) => {
  return (
    <div className="grid-item-article">
      <div className="video-display-header">Poslednje vesti</div>
      {props.articles.map((article) => (
        <ArticleCard article={article} />
      ))}
    </div>
  );
};

export default Articles;
