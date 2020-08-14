import React, { useEffect, useState } from "react";
// import helpers
import { Link } from "react-router-dom";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
import CrudTab from "../../../dashboard/CrudTab";
// import helpers
import {
  navbarPageReadAllByOrder,
  navbarPageRemoveById,
} from "../../../api/adminApi";

const ReadPages = () => {
  const [navPages, setNavPages] = useState([]);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    navbarPageReadAllByOrder()
      .then((response) => response.json())
      .then((responseJson) => setNavPages(responseJson))
      .catch((error) => console.log(error));
  }, [success]);

  const handleClickRemovePage = (e, id) => {
    e.preventDefault();
    navbarPageRemoveById(id).then((response) => {
      if (response.ok) {
        setSuccess("Deleted successfully");
      } else {
        setSuccess("Something went wrong");
      }
    });
  };

  const displayPages = () => (
    <>
      {success && <div className="success-msg">{success}</div>}
      <div className="col s12">
        {navPages &&
          navPages.map((navPage, i) => (
            <div className="article-table" key={i}>
              <div>
                <span>
                  <span className="article-table-list">Nav ime</span>:{" "}
                  {navPage.navbarName} |{" "}
                </span>
                <span>
                  <span className="article-table-list">Naslov</span>:{" "}
                  {navPage.header} |{" "}
                </span>
                <span>
                  <span className="article-table-list">Redosled</span>:{" "}
                  {navPage.navbarOrder} |{" "}
                </span>
              </div>

              <div>
                <Link
                  onClick={(e) => handleClickRemovePage(e, navPage.id)}
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
        createTo={"/admin/pages/create"}
        readTo={"/admin/pages/readall"}
      />
      {displayPages()}
    </>
  );
};

export default ReadPages;
