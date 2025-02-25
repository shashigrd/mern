import React, { useState } from "react";

export const Registration = () => {
  const [formData, setFormData] = useState({});

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
    console.log(formData);
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Registration</h1>
      <div>
        <label>User Name</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          placeholder="phone"
          name="phone"
          onChange={handleChange}
        />
      </div>
      <div>
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
