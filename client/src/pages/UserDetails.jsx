import { useEffect, useState } from "react";
import "../styles/Registration.css";
import { useParams } from "react-router-dom";
import { useAuth } from "../common/AuthProvider";

export const UserDetails = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const { userId } = useParams();
  const { token } = useAuth();
  console.log(userId);

  useEffect(() => {
    const getUser = async () => {
      const data = await fetch(
        `http://localhost:3000/api/auth/user/edit/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      const res = await data.json();
      setFormData({
        username: res.msg.username,
        email: res.msg.email,
        phone: res.msg.phone,
      });
    };
    getUser();
  }, [userId]);

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  return (
    <div className="registration-container">
      <h1>User Details</h1>
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label>User Name</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
          value={formData.username}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          placeholder="phone"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
        />
      </div>
      <div>
        <button type="button">Update User</button>
      </div>
    </div>
  );
};
