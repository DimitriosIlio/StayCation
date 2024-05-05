/* login.js */

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState(""); // Add state for email
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (!username || !password || !email) { // Check if email is empty
        setError("Please enter username, email, and password");
        setLoading(false);
        return;
      }
      let user = { email, username, password }; // Include email in user object
      let res = await axios.post("http://localhost:5000/api/users/login", user);
      let token = res.data.token;
      localStorage.setItem("token", token);
      console.log(res.data.message);
      navigate("/dashboard");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("An error occurred. Please try again later.");
      }
      console.error("Error logging in:", error);
    }
    setLoading(false);
  };

  return (
    <div className="loginWrapper">
      <div>
        <form className="loginForm" onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="element">
            <label htmlFor="email">Email:</label> {/* Add email input field */}
            <input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="element">
            <label htmlFor="username">Username:</label>
            <input type="text" value={username} id="username" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="element">
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
