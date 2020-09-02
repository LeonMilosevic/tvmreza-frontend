import React from "react";
// import helpers
import { Link } from "react-router-dom";
//import components
import ArticleCard from "../../reusable/ArticleCard";

import { PublicContext } from "../../../context/public/PublicContext";

const ArticlesLatest = () => {
  const { articlesLatestOnly8 } = React.useContext(PublicContext);
  return (
    <div className="grid-item-article">
      <div className="video-display-header">
        <Link className="empty-link" to="/vesti/poslednje">
          Poslednje vesti
        </Link>
      </div>
      {articlesLatestOnly8.map((article, i) => (
        <ArticleCard key={i} article={article} />
      ))}
    </div>
  );
};

export default ArticlesLatest;
