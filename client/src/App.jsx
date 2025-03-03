import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Registration } from "./pages/Registration";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { AuthProvider } from "./common/AuthProvider";
import { NavBar } from "./pages/NavBar";
import { ContactUs } from "./pages/ContactUs";
import "./styles/App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
