import React from "react";
// import comopnents
import AdminNavbar from "../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../dashboard/AdminManagementNavbar";
import CrudTab from "../../dashboard/CrudTab";
const AdminPost = () => {
  return (
    <>
      <AdminNavbar />
      <AdminManagementNavbar />
      <CrudTab createTo={"/admin/posts"} readTo={"/admin/posts/readall"} />
    </>
  );
};

export default AdminPost;
