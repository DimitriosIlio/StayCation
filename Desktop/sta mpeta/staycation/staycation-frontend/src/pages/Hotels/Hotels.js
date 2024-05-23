// Hotels.js

import React from 'react';
import './Hotels.css';
import hotelA1 from '../../assets/images/hotelA1.jpg';
import hotelA2 from '../../assets/images/hotelA2.jpeg';
import hotelB1 from '../../assets/images/hotelB1.jpg';
import hotelB2 from '../../assets/images/hotelB2.webp';
import hotelC1 from '../../assets/images/hotelC1.jpg';
import hotelC2 from '../../assets/images/hotelC2.webp';
import hotelD1 from '../../assets/images/hotelD1.jpg';
import hotelD2 from '../../assets/images/hotelD2.jpg';
import hotelE1 from '../../assets/images/hotelE1.jpg';
import hotelE2 from '../../assets/images/hotelE2.jpg';

const Hotels = () => {
  return (
    <div className="hotels-container">
      <h1 className="page-title">Hotels</h1>
      <div className="hotel-card">
        <div className="hotel-images">
          <img src={hotelA1} alt="Hotel A" />
          <img src={hotelA2} alt="Hotel A" />
        </div>
        <h2 className="hotel-title">Metropolitan Suites</h2>
        <p className="hotel-description">Metropolitan Suites offers luxurious accommodation in the heart of the city. With spacious rooms and modern amenities, it's the perfect choice for business travelers and tourists alike.</p>
        <p>Location: Downtown area, Athens, Greece</p>
        <p>Rating: 4.5/5</p>
        <p className="hotel-price">Price Range: $100 - $300 per night</p>
        <p>Amenities: Free Wi-Fi, Gym, Restaurant</p>
      </div>
      <div className="hotel-card">
        <div className="hotel-images">
          <img src={hotelB1} alt="Hotel B" />
          <img src={hotelB2} alt="Hotel B" />
        </div>
        <h2 className="hotel-title">Oceanic Retreat Resort</h2>
        <p className="hotel-description">Escape to Oceanic Retreat Resort for a rejuvenating beachfront getaway. Indulge in spa treatments, relax by the pool, and enjoy exquisite dining options overlooking the ocean.</p>
        <p>Location: Beachfront property, Athens, Greece</p>
        <p>Rating: 4.7/5</p>
        <p className="hotel-price">Price Range: $150 - $400 per night</p>
        <p>Amenities: Swimming pool, Spa, Bar</p>
      </div>
      <div className="hotel-card">
        <div className="hotel-images">
          <img src={hotelC1} alt="Hotel C" />
          <img src={hotelC2} alt="Hotel C" />
        </div>
        <h2 className="hotel-title">Skyline View Hotel</h2>
        <p className="hotel-description">Experience the breathtaking skyline views at Skyline View Hotel. Located in the bustling city center, this hotel offers modern rooms, delicious dining options, and easy access to nearby attractions.</p>
        <p>Location: City center, Athens, Greece</p>
        <p>Rating: 4.2/5</p>
        <p className="hotel-price">Price Range: $200 - $500 per night</p>
        <p>Amenities: Free breakfast, Business center, Concierge</p>
      </div>
      <div className="hotel-card">
        <div className="hotel-images">
          <img src={hotelD1} alt="Hotel D" />
          <img src={hotelD2} alt="Hotel D" />
        </div>
        <h2 className="hotel-title">Sunset Haven Resort</h2>
        <p className="hotel-description">Discover paradise at Sunset Haven Resort. Nestled in a scenic location, this resort offers luxurious accommodations, stunning sunset views, and a wide range of activities for guests of all ages.</p>
        <p>Location: Scenic location, Athens, Greece</p>
        <p>Rating: 4.6/5</p>
        <p className="hotel-price">Price Range: $250 - $600 per night</p>
        <p>Amenities: Outdoor pool, Children’s play area, Fitness center</p>
      </div>
      <div className="hotel-card">
        <div className="hotel-images">
          <img src={hotelE1} alt="Hotel E" />
          <img src={hotelE2} alt="Hotel E" />
        </div>
        <h2 className="hotel-title">Suburbian Hotel</h2>
        <p className="hotel-description">Experience luxury and comfort at Suburbian Hotel. Located in a peaceful suburban area, this hotel offers elegant rooms, fine dining options, and state-of-the-art conference facilities, making it ideal for business travelers and families alike.</p>
        <p>Location: Suburban area, Athens, Greece</p>
        <p>Rating: 4.4/5</p>
        <p className="hotel-price">Price Range: $120 - $350 per night</p>
        <p>Amenities: Spa, Restaurant, Conference facilities</p>
      </div>
    </div>
  );
}

export default Hotels;
