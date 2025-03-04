import React, { useEffect, useState } from "react";
import { useAuth } from "../common/AuthProvider";

export const ContactUs = () => {
  const { token } = useAuth();
  const [userData, setUserData] = useState();

  const checkUser = async () => {
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
    checkUser();
  }, []);

  return (
    <React.Fragment>
      <h1>Contact Us</h1>
    </React.Fragment>
  );
};
