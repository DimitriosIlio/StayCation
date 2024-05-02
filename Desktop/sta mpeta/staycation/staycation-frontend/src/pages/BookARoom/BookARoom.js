import React from 'react';
import './BookARoom.css';

const BookARoom = () => {
  // Sample data for rooms with additional information
  const rooms = [
    { 
      id: 1, 
      hotel: 'Hotel A', 
      type: 'Single', 
      price: 100, 
      amenities: ['Free Wi-Fi', 'Gym', 'Restaurant'],
      features: ['Queen-sized bed', 'City view', 'Private bathroom'],
      location: 'Downtown area, near shopping centers',
      reviews: [
        { user: 'John Doe', rating: 4, comment: 'Great stay, friendly staff!' },
        { user: 'Jane Smith', rating: 5, comment: 'Amazing experience, highly recommended!' }
      ],
      specialOffers: ['Stay 3 nights, get 1 night free']
    },
    { 
      id: 2, 
      hotel: 'Hotel B', 
      type: 'Double', 
      price: 150, 
      amenities: ['Swimming pool', 'Spa', 'Bar'],
      features: ['King-sized bed', 'Ocean view', 'Balcony'],
      location: 'Beachfront property, close to attractions',
      reviews: [
        { user: 'Alice Johnson', rating: 5, comment: 'Perfect getaway destination!' },
        { user: 'Bob Williams', rating: 4, comment: 'Lovely hotel with great amenities.' }
      ],
      specialOffers: ['10% off for early bookings']
    },
    { 
      id: 3, 
      hotel: 'Hotel C', 
      type: 'Suite', 
      price: 200, 
      amenities: ['Free breakfast', 'Business center', 'Concierge'],
      features: ['Master bedroom', 'Living room', 'Kitchenette'],
      location: 'City center, convenient for business travelers',
      reviews: [
        { user: 'Emily Davis', rating: 4, comment: 'Excellent service and comfortable stay.' },
        { user: 'Michael Wilson', rating: 5, comment: 'Highly impressed with the suite.' }
      ],
      specialOffers: ['Complimentary airport shuttle']
    },
    { 
      id: 4, 
      hotel: 'Hotel D', 
      type: 'Family', 
      price: 250, 
      amenities: ['Outdoor pool', 'Children’s play area', 'Fitness center'],
      features: ['Two bedrooms', 'Mountain view', 'Private terrace'],
      location: 'Scenic location, ideal for family vacations',
      reviews: [
        { user: 'Sophia Martinez', rating: 5, comment: 'Perfect for families, kids loved it!' },
        { user: 'James Anderson', rating: 4, comment: 'Great family-friendly hotel with beautiful views.' }
      ],
      specialOffers: ['Family package with complimentary meals']
    },
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
          <p>Amenities: {room.amenities.join(', ')}</p>
          <p>Features: {room.features.join(', ')}</p>
          <p>Location: {room.location}</p>
          <p>Special Offers: {room.specialOffers.join(', ')}</p>
          <button onClick={() => handleBooking(room.id)}>Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default BookARoom;
