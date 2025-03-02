import { useEffect } from "react";
import { useAuth } from "../common/AuthProvider";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const { clearToken } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    clearToken();
    navigate("/Login");
  }, []);
};
