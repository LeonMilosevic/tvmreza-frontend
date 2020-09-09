import React from "react";
// import helpers
import { Link } from "react-router-dom";

/**
 * ArticleCardCategory component,
 *
 * to display latest articles from a category on the homepage.
 *
 *
 */
const ArticleCardCategory = (props) => {
  return (
    <div className="card custom-card">
      <div className="card-image">
        <img src={props.article.imageUrl} alt="vesti" />
        <span className="card-title card-title-custom">
          {props.article.categoryName}
        </span>
      </div>
      <div className="card-content">
        <p>{props.article.header}</p>
      </div>
      <div className="card-action">
        <Link
          to={{
            pathname: `/vest/${props.article.header}/${props.article.id}`,
          }}
        >
          Detaljnije
        </Link>
      </div>
    </div>
  );
};

export default ArticleCardCategory;
