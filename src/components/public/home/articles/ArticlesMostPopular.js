import React from "react";
import ArticleCard from "../../reusable/ArticleCard";

import { PublicContext } from "../../../context/public/PublicContext";

const ArticlesMostPopular = (props) => {
  const { popularArticles } = React.useContext(PublicContext);

  return (
    <div className="grid-item-mostpopular">
      <div className="popular-display-header">Najpopularnije vesti</div>
      {popularArticles.map((article, i) => (
        <ArticleCard key={i} article={article} />
      ))}
    </div>
  );
};

export default ArticlesMostPopular;
