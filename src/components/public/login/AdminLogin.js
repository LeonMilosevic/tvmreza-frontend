import React from "react";
// import helpers
import {
  loginUser,
  saveTokenToLocalStorage,
  saveUserToLocalStorage,
} from "../../auth/auth";
import { Link } from "react-router-dom";

/**
 * Component: AdminLogin
 * Description: This component will authenticate the admin user, assign a valid token and pass it.
 * Author: Leon
 */

const AdminLogin = () => {
  const [loginDetails, setLoginDetails] = React.useState({
    username: "Administrator",
    password: "XeGyZp2UyCsOw4z5suKJh7TiFl2Bc2zr",
  });
  const [message, setMessage] = React.useState(null);
  const [success, setSuccess] = React.useState(false);
  const handleChangeLoginDetails = (name) => (e) => {
    setLoginDetails({ ...loginDetails, [name]: e.target.value });
  };
  /**
   * @catch catches an error and adds it to the error state so it can be desplayed to the client
   * @returns saves jwt token to local storaget and admin user to local storate
   */
  const handleSubmitLoginForm = () => {
    loginUser(loginDetails.username, loginDetails.password)
      .then((response) => {
        if (response.ok !== true) {
          return setMessage("Wrong credentials");
        } else {
          saveTokenToLocalStorage(response.headers.get("Jwt-Token"));
          return response.json();
        }
      })
      .then((responseJson) => {
        if (responseJson.ok === false) {
          return setMessage("Wrong credentials");
        } else {
          saveUserToLocalStorage(responseJson);
          return setSuccess(true);
        }
      })
      .catch(() => setMessage("The credentials are wrong, please try again"));
  };

  return (
    <>
      <div className="admin-header">Admin login page</div>
      <div className="admin-input-wrapper">
        <input
          onChange={handleChangeLoginDetails("username")}
          name="username"
          type="text"
        />
        <input
          onChange={handleChangeLoginDetails("password")}
          name="password"
          type="password"
        />
        <input type="submit" value="submit" onClick={handleSubmitLoginForm} />
        {message !== null ? <div>{message}</div> : ""}
        {success && <Link to="/admin/dashboard">Success</Link>}
      </div>
    </>
  );
};

export default AdminLogin;
