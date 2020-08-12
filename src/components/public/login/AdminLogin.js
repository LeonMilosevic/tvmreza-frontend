import React from "react";
// import helpers
import {
  loginUser,
  saveTokenToLocalStorage,
  saveUserToLocalStorage,
} from "../../auth/auth";

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
  const [error, setError] = React.useState(null);

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
        saveTokenToLocalStorage(response.headers.get("Jwt-Token"));
        return response.json();
      })
      .then((responseJson) => {
        saveUserToLocalStorage(responseJson);
      })
      .catch(() => setError("The credentials are wrong, please try again"));
  };

  return (
    <>
      <div>Admin login page</div>
      <div>
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
        {error !== null ? <div>{error}</div> : ""}
      </div>
    </>
  );
};

export default AdminLogin;
