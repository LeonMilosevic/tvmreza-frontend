import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="navbar-custom-admin">
      <div className="navbar-admin-header">
        <Link className="navbar-admin-header-link" to="/admin/dashboard">
          Management Dashboard
        </Link>
      </div>
      <div className="navbar-admin-link">
        <Link className="admin-navbar-link" to="/">
          Go to page
        </Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
