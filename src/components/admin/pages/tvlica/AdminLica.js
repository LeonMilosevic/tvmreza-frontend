import React from "react";
// import comopnents
import AdminNavbar from "../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../dashboard/AdminManagementNavbar";
import CrudTab from "../../dashboard/CrudTab";
const AdminLica = () => {
  return (
    <>
      <AdminNavbar />
      <AdminManagementNavbar />
      <CrudTab
        createTo={"/admin/tvfaces/create"}
        readTo={"/admin/tvfaces/readall"}
      />
    </>
  );
};

export default AdminLica;
