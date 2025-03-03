import { Link } from "react-router-dom";
import { useAuth } from "../common/AuthProvider";
import "../styles/NavBar.css";

export const NavBar = () => {
  const { isLogin } = useAuth();
  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      {!isLogin ? (
        <>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      )}
    </ul>
  );
};
