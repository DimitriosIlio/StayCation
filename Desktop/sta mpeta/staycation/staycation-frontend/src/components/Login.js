import { useState } from "react"; // Allows us to store values in state
import axios from "axios"; // Connection to database
import { useNavigate } from "react-router-dom"; // Allows us to link to different routes
import "./Login.css"



export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      let user = { username, password };
      let res = await axios.post("http://localhost:4000/auth/login", user);
      let token = res.data.token;
      localStorage.setItem("token", token);
      console.log(res.data.message);
      navigate("/dashboard"); // Redirect to dashboard after successful login
    } catch (error) {
      setError("Invalid username or password"); // Set error message for display
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="loginWrapper">
      <div>
        <form className="loginForm" onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className="element">
            <label htmlFor="username">Username:</label>
            <input type="text" value={username} id="username" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="element">
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p className="error">{error}</p>} {/* Display error message if there's an error */}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
