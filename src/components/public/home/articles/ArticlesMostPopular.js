import React from "react";
import ArticleCard from "../../reusable/ArticleCard";
// import helpers
import { Link } from "react-router-dom";
import { PublicContext } from "../../../context/public/PublicContext";

const ArticlesMostPopular = () => {
  const { articlesMostPopularOnly8 } = React.useContext(PublicContext);

  return (
    <div className="grid-item-mostpopular">
      <div className="popular-display-header">
        <Link className="empty-link" to="/vesti/najpopularnije">
          Najpopularnije vesti
        </Link>
      </div>
      {articlesMostPopularOnly8.map((article, i) => (
        <ArticleCard key={i} article={article} />
      ))}
    </div>
  );
};

export default ArticlesMostPopular;
