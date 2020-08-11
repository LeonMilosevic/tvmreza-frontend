import React from "react";
// import helpers
import {
  loginUser,
  saveTokenToLocalStorage,
  saveUserToLocalStorage,
} from "../../auth/auth";

const AdminLogin = () => {
  const [loginDetails, setLoginDetails] = React.useState({
    username: "Administrator",
    password: "XeGyZp2UyCsOw4z5suKJh7TiFl2Bc2zr",
  });

  const handleChangeLoginDetails = (name) => (e) => {
    setLoginDetails({ ...loginDetails, [name]: e.target.value });
  };

  const handleSubmitLoginForm = () => {
    loginUser(loginDetails.username, loginDetails.password)
      .then((response) => {
        saveTokenToLocalStorage(response.headers.get("Jwt-Token"));
        return response.json();
      })
      .then((responseJson) => {
        saveUserToLocalStorage(responseJson);
      });
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
      </div>
    </>
  );
};

export default AdminLogin;
