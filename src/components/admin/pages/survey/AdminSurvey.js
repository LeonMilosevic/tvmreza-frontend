import React from "react";
// import comopnents
import AdminNavbar from "../../dashboard/AdminNavbar";
import AdminManagementNavbar from "../../dashboard/AdminManagementNavbar";
import CrudTab from "../../dashboard/CrudTab";
const AdminSurvey = () => {
  return (
    <>
      <AdminNavbar />
      <AdminManagementNavbar />
      <CrudTab
        createTo={"/admin/survey/create"}
        readTo={"/admin/survey/readall"}
      />
    </>
  );
};

export default AdminSurvey;
