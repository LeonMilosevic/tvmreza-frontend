import React from "react";
// import comopnents
import AdminNavbar from "../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../dashboard/AdminManagementNavbar";
import CrudTab from "../../dashboard/CrudTab";
const AdminBanner = () => {
  return (
    <>
      <AdminNavbar />
      <AdminManagementNavbar />
      <CrudTab
        createTo={"/admin/banners/create"}
        readTo={"/admin/banners/readall"}
      />
    </>
  );
};

export default AdminBanner;
