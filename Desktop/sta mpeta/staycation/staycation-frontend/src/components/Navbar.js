import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
 import "./Navbar.css"; 

 const Navbar = () => {
  let navigate = useNavigate();
  let token;
  if (localStorage.getItem("token")) {
    token = localStorage.getItem("token");
    try {
      jwtDecode(token);
    } catch (error) {
      console.error("Error decoding token:", error);
      // Handle the error (e.g., redirect to login page)
    }
  }
  function handleLogout() {
    if (localStorage.getItem("token")) {
      if (window.confirm("Are you sure you want to logout?")) {
        localStorage.removeItem("token");
        console.log("Logout successfully");
        navigate("/");
      }
    }
  }

  return (
    <div className="navbar">
      <h1>StayCation</h1>
      {token ? (
        <div className="links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/book-a-room" className="link">
            Book a Room
          </Link>
          <Link to="/Hotels" className="link">
            Hotels
          </Link>
          <Link onClick={handleLogout} to="/" className="link">
            Logout
          </Link>
        </div>
      ) : (
        <div className="links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/login" className="link">
            Login
          </Link>
          <Link to="/register" className="link">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;