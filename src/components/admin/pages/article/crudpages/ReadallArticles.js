import React from "react";
// import helpers
import { NavLink } from "react-router-dom";
// import comopnents
import AdminNavbar from "../../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../../dashboard/AdminManagementNavbar";
const ReadallArticles = () => {
  return (
    <>
      <AdminNavbar />
      <AdminManagementNavbar />
      <div className="crud-tab">
        <NavLink
          activeClassName="crud-tab-link-active"
          className="crud-tab-link"
          to="/admin/articles/create"
        >
          Create new
        </NavLink>
        <NavLink
          activeClassName="crud-tab-link-active"
          className="crud-tab-link"
          to="/admin/articles/readall"
        >
          Read all
        </NavLink>
      </div>
    </>
  );
};

export default ReadallArticles;
