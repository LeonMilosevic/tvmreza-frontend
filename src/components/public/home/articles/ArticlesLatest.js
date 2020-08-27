import React from "react";
import ArticleCard from "./ArticleCard";

import { PublicContext } from "../../../context/public/PublicContext";

const ArticlesLatest = () => {
  const { articlesLatestOnly8 } = React.useContext(PublicContext);
  return (
    <div className="grid-item-article">
      <div className="video-display-header">Poslednje vesti</div>
      {articlesLatestOnly8.map((article, i) => (
        <ArticleCard key={i} article={article} />
      ))}
    </div>
  );
};

export default ArticlesLatest;
