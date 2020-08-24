/**
 * Here we will take care of auth functions
 *
 */
import jwt from "jsonwebtoken";
export const isAuthenticated = () => {};

export const loginUser = (username, password) => {
  return fetch(`${process.env.REACT_APP_API_PUBLIC}/user/login`, {
    crossDomain: true,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem(process.env.REACT_APP_JWT_TOKEN_STRING);
};

export const saveTokenToLocalStorage = (token) => {
  localStorage.setItem(process.env.REACT_APP_JWT_TOKEN_STRING, token);
};

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem(process.env.REACT_APP_JWT_TOKEN_STRING);
};

export const saveUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const isLoggedIn = () => {
  const token = getTokenFromLocalStorage();
  if (token !== null && token !== "") {
    const decoded = jwt.decode(token, { complete: true });
    const dateNow = Math.round(new Date().getTime() / 1000);
    if (
      decoded.payload.sub !== null &&
      decoded.payload.sub !== "" &&
      decoded.payload.exp > dateNow
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    logout();
    return false;
  }
};
