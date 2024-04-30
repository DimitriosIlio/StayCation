import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      let user = { username, password };
      let res = await axios.post("http://localhost:4000/auth/register", user);
      console.log(res.data.message);
      console.log(res.data);
      navigate("/login");
      alert("Registered successfully! Please login");
    } catch (error) {
      setError(error.response.data.message);
    }
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
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="element">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" value={confirmPassword} id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
