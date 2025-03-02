import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const isLogin = !!token;
  const storeToken = (tokenParam) => {
    localStorage.setItem("token", tokenParam);
  };
  const clearToken = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ storeToken, clearToken, isLogin, token }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(UserContext);
};
