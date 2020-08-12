import React from "react";
import { NavLink } from "react-router-dom";
// import context
import { AdminContext } from "../../context/admin/AdminContext";

const AdminManagementNavbar = () => {
  const { user } = React.useContext(AdminContext);
  return (
    <nav className="navbar-custom-admin-management">
      <div className="navbar-admin-management-links">
        <div>
          <NavLink
            activeClassName="navbar-admin-management-link-active"
            className="navbar-admin-management-link"
            to="/admin/articles"
          >
            Article
          </NavLink>
        </div>
        <div>
          <NavLink
            activeClassName="navbar-admin-management-link-active"
            className="navbar-admin-management-link"
            to="/admin/videos"
          >
            Video
          </NavLink>
        </div>
        <div>
          <NavLink
            activeClassName="navbar-admin-management-link-active"
            className="navbar-admin-management-link"
            to="/admin/sporazum"
          >
            Sporazum
          </NavLink>
        </div>
        <div>
          <NavLink
            activeClassName="navbar-admin-management-link-active"
            className="navbar-admin-management-link"
            to="/admin/pages"
          >
            Page
          </NavLink>
        </div>
        <div>
          <NavLink
            activeClassName="navbar-admin-management-link-active"
            className="navbar-admin-management-link"
            to="/admin/banners"
          >
            Banner
          </NavLink>
        </div>
        <div>
          <NavLink
            activeClassName="navbar-admin-management-link-active"
            className="navbar-admin-management-link"
            to="/admin/posts"
          >
            Posts
          </NavLink>
        </div>
        <div>
          <NavLink
            activeClassName="navbar-admin-management-link-active"
            className="navbar-admin-management-link"
            to="/admin/categories"
          >
            Category
          </NavLink>
        </div>
        <div>
          <NavLink
            activeClassName="navbar-admin-management-link-active"
            className="navbar-admin-management-link"
            to="/admin/footers"
          >
            Footer
          </NavLink>
        </div>
        <div>
          <NavLink
            activeClassName="navbar-admin-management-link-active"
            className="navbar-admin-management-link"
            to="/admin/tvfaces"
          >
            Tv Lica
          </NavLink>
        </div>
      </div>
      <div className="navbar-admin-header-management">
        Welcome, {user && user.firstName}
      </div>
    </nav>
  );
};
export default AdminManagementNavbar;
