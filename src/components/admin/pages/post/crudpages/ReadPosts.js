import React, { useEffect, useState } from "react";
// import helpers
import { Link } from "react-router-dom";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";
// import helpers
import { postsReadAllByOrder, postRemoveById } from "../../../api/adminApi";
const ReadPosts = () => {
  const [posts, setPosts] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    postsReadAllByOrder()
      .then((response) => response.json())
      .then((responseJson) => setPosts(responseJson))
      .catch((error) => console.log(error));
  }, [success]);

  const handleClickRemovePost = (e, id) => {
    e.preventDefault();
    postRemoveById(id).then((response) => {
      if (response.ok) {
        setSuccess("Deleted successfully");
      } else {
        setSuccess("Something went wrong");
      }
    });
  };

  const displayPosts = () => (
    <>
      {success && <div className="success-msg">{success}</div>}
      <div className="col s12">
        {posts &&
          posts.map((post, i) => (
            <div className="article-table" key={i}>
              <div>
                <span>
                  <span className="article-table-list">Koristink</span>:{" "}
                  {post.username} |{" "}
                </span>
                <span>
                  <span className="article-table-list">Text</span>:{" "}
                  {post.textContent.slice(0, 30)} |{" "}
                </span>
                <span>
                  <span className="article-table-list">Napravljen</span>:{" "}
                  {post.dateCreated.slice(0, 10)} |{" "}
                </span>
              </div>

              <div>
                <Link
                  onClick={(e) => handleClickRemovePost(e, post.id)}
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
      <CrudTab createTo={"/admin/posts"} readTo={"/admin/posts/readall"} />
      {displayPosts()}
    </>
  );
};

export default ReadPosts;
