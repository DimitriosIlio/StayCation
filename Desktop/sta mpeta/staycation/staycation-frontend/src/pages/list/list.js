import React from 'react';
import './List.css'; 

const List = () => {
  // Sample list of hotels (you can replace it with your actual data)
  const hotels = [
    { id: 1, name: 'Hotel A', location: 'City A' },
    { id: 2, name: 'Hotel B', location: 'City B' },
    { id: 3, name: 'Hotel C', location: 'City C' },
    // Add more hotels as needed
  ];

  return (
    <div className="list-container">
      <h1>List of Hotels</h1>
      <ul className="hotel-list">
        {hotels.map(hotel => (
          <li key={hotel.id} className="hotel-item">
            <div className="hotel-name">{hotel.name}</div>
            <div className="hotel-location">{hotel.location}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
