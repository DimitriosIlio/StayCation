import React from 'react';
import { Link } from 'react-router-dom'; 
 import './Homepage.css'; 

const Home = ({ isAuthenticated }) => {
  return (
    <div className="homepage-container"> 
      <div className="logo">StayCation</div> 
      <Link to="/" className="nav-link">Home</Link> 
      <Link to="/hotels" className="nav-link">Hotels</Link> 
      <Link to="/book-a-room" className="nav-link">Book a Room</Link> 
      <Link to="/login" className="nav-link">Log In</Link> 
      <Link to="/register" className="nav-link">Register</Link> 
      {isAuthenticated && <Link to="/logout" className="nav-link">Log Out</Link>}
    </div>
  );
}

export default Home;
