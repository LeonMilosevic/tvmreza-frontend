import React from "react";
// import helpers
import parse from "html-react-parser";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const ArticleCard = (props) => {
  return (
    <>
      <div className="article-card">
        <div className="article-card-img-wrapper">
          <Link
            to={{
              pathname: `/vest/${props.article.header}/${props.article.id}`,
            }}
          >
            <img
              className="article-card-img"
              src={props.article.imageUrl}
              alt="article"
            />
            {props.article.videoUrl !== "" ? (
              <div className="article-video-icon">
                <i className="tiny material-icons">play_circle_outline</i>
              </div>
            ) : (
              ""
            )}
          </Link>
        </div>
        <div className="article-text">
          <div className="article-category">{props.article.categoryName}</div>
          <div className="article-header">
            <Link
              className="empty-link"
              to={{
                pathname: `/vest/${props.article.header}/${props.article.id}`,
              }}
            >
              {props.article.header}
            </Link>
          </div>
          <div className="article-content">
            {parse(props.article.content.slice(0, 80) + "...")}
          </div>
          <div className="article-text-bottom">
            <span>
              <Moment format="YYYY/MM/DD" date={props.article.dateDisplay} />
            </span>
            <span className="article-icon">
              <i className="tiny material-icons icon-color">mode_comment</i>
              &nbsp;
              {props.article.posts.length}
            </span>
            <span>Autor: {props.article.author}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
