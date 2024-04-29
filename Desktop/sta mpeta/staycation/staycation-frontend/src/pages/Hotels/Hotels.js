// Hotels.js
import React from 'react';
import './Hotels.css';

const Hotels = () => {
  return (
    <div className="hotels-container">
      <h1>Hotels</h1>
      <div className="hotel">
        <h2>Hotel A</h2>
        <p>Description of Hotel A...</p>
        {/* Add more details about Hotel A */}
      </div>
      <div className="hotel">
        <h2>Hotel B</h2>
        <p>Description of Hotel B...</p>
        {/* Add more details about Hotel B */}
      </div>
      <div className="hotel">
        <h2>Hotel C</h2>
        <p>Description of Hotel C...</p>
        {/* Add more details about Hotel C */}
      </div>
      <div className="hotel">
        <h2>Hotel D</h2>
        <p>Description of Hotel D...</p>
        {/* Add more details about Hotel D */}
      </div>
      <div className="hotel">
        <h2>Hotel E</h2>
        <p>Description of Hotel E...</p>
        {/* Add more details about Hotel E */}
      </div>
    </div>
  );
}

export default Hotels;
