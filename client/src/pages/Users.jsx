import React, { useEffect, useState } from "react";
import { useAuth } from "../common/AuthProvider";
import "../styles/Users.css";

export const Users = () => {
  const { token } = useAuth();
  const [userData, setUserData] = useState([]);

  const getUsers = async () => {
    const data = await fetch("http://localhost:3000/api/auth/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const res = await data.json();
    setUserData(res);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <React.Fragment>
      <h1>User List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th className="table-header">User Name</th>
            <th className="table-header">Email</th>
            <th className="table-header">Phone</th>
            <th className="table-header">Edit</th>
            <th className="table-header">Delete</th>
          </tr>
        </thead>
        <tbody>
          {userData &&
            userData?.msg &&
            userData?.msg?.length > 0 &&
            userData?.msg?.map((user, index) => {
              return (
                <tr key={index}>
                  <td className="table-cell">{user.username}</td>
                  <td className="table-cell">{user.email}</td>
                  <td className="table-cell">{user.phone}</td>
                  <td className="table-cell">Edit</td>
                  <td className="table-cell">Delete</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
};
