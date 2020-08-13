import React, { useEffect, useState } from "react";
// import helpers
import { Link } from "react-router-dom";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";
// import helpers
import { articleReadAllByDate, articleRemoveById } from "../../../api/adminApi";
/**
 * We will call readAllArticles to get all alrticles from backend api.
 * We will populate the state from that call.
 * We will display articles and add update / delete functionality.
 *
 */
const ReadallArticles = () => {
  const [articles, setArticles] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    articleReadAllByDate()
      .then((response) => response.json())
      .then((responseJson) => setArticles(responseJson))
      .catch((error) => console.log(error));
  }, [success]);

  const handleClickRemoveArticle = (e, id) => {
    e.preventDefault();
    articleRemoveById(id).then((response) => {
      if (response.ok) {
        setSuccess("Deleted successfully");
      } else {
        setSuccess("Something went wrong");
      }
    });
  };

  const displayArticles = () => (
    <>
      {success && <div className="success-msg">{success}</div>}
      <div className="col s12">
        {articles &&
          articles.map((article, i) => (
            <div className="article-table" key={i}>
              <div>
                <span>
                  <span className="article-table-list">Naslov</span>:{" "}
                  {article.header} |{" "}
                </span>
                <span>
                  <span className="article-table-list">Kategorija</span>:{" "}
                  {article.categoryName} |{" "}
                </span>
                <span>
                  <span className="article-table-list">Autor</span>:{" "}
                  {article.author} |{" "}
                </span>
                <span>
                  <span className="article-table-list">Pregleda</span>:{" "}
                  {article.timesViewed} |{" "}
                </span>
                <span>
                  <span className="article-table-list">Napravljen</span>:{" "}
                  {article.dateCreated.slice(0, 10)}
                </span>
              </div>

              <div>
                <Link
                  to={{
                    pathname: `/admin/article/update/${article.id}`,
                    state: article,
                  }}
                  className="link-update"
                >
                  Update
                </Link>{" "}
                |
                <Link
                  onClick={(e) => handleClickRemoveArticle(e, article.id)}
                  to="/"
                  className="link-remove"
                >
                  {" "}
                  Delete
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
  return (
    <>
      <AdminNavbar />
      <AdminManagementNavbar />
      <CrudTab
        createTo={"/admin/articles/create"}
        readTo={"/admin/articles/readall"}
      />
      {displayArticles()}
    </>
  );
};

export default ReadallArticles;
