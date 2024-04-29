import React from 'react';
import './BookARoom.css';

const BookARoom = () => {
  // Sample data for rooms
  const rooms = [
    { id: 1, hotel: 'Hotel A', type: 'Single', price: 100 },
    { id: 2, hotel: 'Hotel A', type: 'Double', price: 150 },
    { id: 3, hotel: 'Hotel B', type: 'Suite', price: 200 },
    { id: 4, hotel: 'Hotel B', type: 'Family', price: 250 },
    // Add more rooms as needed
  ];

  const handleBooking = (roomId) => {
    // Placeholder function for booking a room
    console.log(`Room with ID ${roomId} booked!`);
  };

  return (
    <div className="booking-container">
      <h1>Book a Room</h1>
      {rooms.map(room => (
        <div key={room.id} className="room">
          <h2>{room.hotel}</h2>
          <p>Type: {room.type}</p>
          <p>Price: ${room.price} per night</p>
          {/* Add booking functionality for each room */}
          <button onClick={() => handleBooking(room.id)}>Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default BookARoom;
