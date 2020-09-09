import React from "react";
import ArticleCard from "../../reusable/ArticleCard";
// import helpers
import { Link } from "react-router-dom";
import { PublicContext } from "../../../context/public/PublicContext";

/**
 * ArticlesMostPopular, we use it to display most popular articles, we use only8 function that will retrieve the top 8 articles from the server, in order to reduce the transaction cost
 *
 */
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
