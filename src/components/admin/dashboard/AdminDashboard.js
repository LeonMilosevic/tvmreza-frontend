import React from "react";
import {
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
} from "../../auth/auth";
// import context
import { AdminContext } from "../../context/admin/AdminContext";
// import comopnents
import AdminNavbar from "./AdminNavbar";
import AdminManagementNavbar from "./AdminManagementNavbar";
const AdminDashboard = () => {
  const { setUser, setToken } = React.useContext(AdminContext);

  React.useEffect(() => {
    setUser(getUserFromLocalStorage());
    setToken(getTokenFromLocalStorage());
  }, [setUser, setToken]);

  return (
    <>
      <AdminNavbar />
      <AdminManagementNavbar />
      <div>TODO: User manual</div>
    </>
  );
};

export default AdminDashboard;
