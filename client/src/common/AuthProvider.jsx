import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState({});
  const isLogin = !!token;
  const storeToken = (tokenParam) => {
    localStorage.setItem("token", tokenParam);
    setToken(tokenParam);
  };
  const clearToken = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider
      value={{ storeToken, clearToken, isLogin, token, setUserData, userData }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(UserContext);
};
