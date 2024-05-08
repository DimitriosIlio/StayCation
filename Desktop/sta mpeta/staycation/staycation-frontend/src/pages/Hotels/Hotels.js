import React from 'react';
import './Hotels.css';

const Hotels = () => {
  return (
    <div className="hotels-container">
      <h1>Hotels</h1>
      <div className="hotel">
        <h2>Metropolitan Suites</h2>
        <p>Description of Hotel A...</p>
        <p>Location: Downtown area</p>
        <p>Rating: 4.5/5</p>
        <p>Price Range: $100 - $300 per night</p>
        <p>Amenities: Free Wi-Fi, Gym, Restaurant</p>
      </div>
      <div className="hotel">
        <h2>Oceanic Retreat Resort</h2>
        <p>Description of Hotel B...</p>
        <p>Location: Beachfront property</p>
        <p>Rating: 4.7/5</p>
        <p>Price Range: $150 - $400 per night</p>
        <p>Amenities: Swimming pool, Spa, Bar</p>
      </div>
      <div className="hotel">
        <h2>Skyline View Hotel</h2>
        <p>Description of Hotel C...</p>
        <p>Location: City center</p>
        <p>Rating: 4.2/5</p>
        <p>Price Range: $200 - $500 per night</p>
        <p>Amenities: Free breakfast, Business center, Concierge</p>
      </div>
      <div className="hotel">
        <h2>Sunset Haven Resort</h2>
        <p>Description of Hotel D...</p>
        <p>Location: Scenic location</p>
        <p>Rating: 4.6/5</p>
        <p>Price Range: $250 - $600 per night</p>
        <p>Amenities: Outdoor pool, Children’s play area, Fitness center</p>
      </div>
      <div className="hotel">
        <h2>Hotel E</h2>
        <p>Description of Hotel E...</p>
        <p>Location: Suburban area</p>
        <p>Rating: 4.4/5</p>
        <p>Price Range: $120 - $350 per night</p>
        <p>Amenities: Spa, Restaurant, Conference facilities</p>
      </div>
    </div>
  );
}

export default Hotels;
