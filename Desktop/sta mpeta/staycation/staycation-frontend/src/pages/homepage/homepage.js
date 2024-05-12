import React from 'react';
import { Link } from 'react-router-dom'; 
 import './Homepage.css'; 

const Home = ({ isAuthenticated }) => {
  return (
    <div className="homepage-container"> 
      <div className="logo">StayCation</div> 
     
    </div>
  );
}

export default Home;