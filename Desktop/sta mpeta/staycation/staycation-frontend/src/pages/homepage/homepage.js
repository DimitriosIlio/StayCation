import React from 'react';
import './homepage.css'; 

const Home = () => {
  return (
    <div className="navbar"> {/* Add the "navbar" class */}
      <div className="logo">StayCation</div> {/* Add StayCation as logo/title */}
      <a href="/" className="active">Home</a> {/* Add the "active" class */}
      <a href="/about">About</a>
      <a href="/book-a-room">Book a Room</a> {/* Changed link text for clarity */}
      {/* Add more links as needed */}
    </div>
  );
}

export default Home;
