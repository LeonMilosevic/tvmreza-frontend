import React, { useState } from "react";

export const AdminContext = React.createContext();

export const AdminProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");

  return (
    <AdminContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
