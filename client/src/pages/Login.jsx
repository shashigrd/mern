import { useState } from "react";
import { useAuth } from "../common/AuthProvider";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const { storeToken } = useAuth();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      return;
    }

    console.log("login form data:::", formData);
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log("login form submit response:::", data);
    storeToken(data.token);
    navigate("/");
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />
      </div>
      <button className="login-button" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};
