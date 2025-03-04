import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../common/AuthProvider";
import "../styles/Registration.css"; // Import the CSS file

export const Registration = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { storeToken, setUserData } = useAuth();

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
    if (
      !formData.username ||
      !formData.email ||
      !formData.phone ||
      !formData.password
    ) {
      setError("All fields are required");
      return;
    }

    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    storeToken(data.token);
    setUserData(data.msg);
    navigate("/");
  };

  return (
    <div className="registration-container">
      <h1>Registration</h1>
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label>User Name</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          placeholder="phone"
          name="phone"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="button" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
};
