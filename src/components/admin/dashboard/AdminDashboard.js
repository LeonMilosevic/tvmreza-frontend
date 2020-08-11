import React from "react";
import AdminNavbar from "./AdminNavbar";
import { isLoggedIn } from "../../auth/auth";
const AdminDashboard = () => {
  React.useEffect(() => {
    const loggedIn = isLoggedIn();
    console.log(loggedIn);
  }, []);
  return (
    <>
      <AdminNavbar />
      <div>Admin Management dashboard</div>
    </>
  );
};

export default AdminDashboard;
