import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      let user = { username, email, password };
      let res = await axios.post("http://localhost:4000/auth/register", user);
      if (res && res.data) {
        console.log(res.data.message);
        console.log(res.data);
        navigate("/login");
        alert("Registered successfully! Please login");
      } else {
        setError("Invalid response from server");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message || "An error occurred while registering");
      } else {
        setError("An error occurred while registering");
      }
    }
    setLoading(false);
  };

  return (
    <div className="registerWrapper">
      <div>
        <form onSubmit={register} className="registerForm">
          <h2>Register</h2>
          <div className="element">
            <label htmlFor="username">Username:</label>
            <input type="text" value={username} id="username" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="element">
            <label htmlFor="email">Email:</label>
            <input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="element">
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="element">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" value={confirmPassword} id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" disabled={loading}>{loading ? "Registering..." : "Register"}</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
