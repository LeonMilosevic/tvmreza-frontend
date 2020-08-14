import React from "react";
// import comopnents
import AdminNavbar from "../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../dashboard/AdminManagementNavbar";
import CrudTab from "../../dashboard/CrudTab";
const AdminPage = () => {
  return (
    <>
      <AdminNavbar />
      <AdminManagementNavbar />
      <CrudTab
        createTo={"/admin/pages/create"}
        readTo={"/admin/pages/readall"}
      />
    </>
  );
};

export default AdminPage;
