import React from "react";
// import helpers
import { Link } from "react-router-dom";

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
        <Link to="/">Detaljnije</Link>
      </div>
    </div>
  );
};

export default ArticleCardCategory;
