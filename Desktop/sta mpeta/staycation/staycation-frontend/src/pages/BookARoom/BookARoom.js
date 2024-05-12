/* import React, { useState } from 'react';
import './BookARoom.css';
import Popup from './Popup'; // Import the Popup component

const BookARoom = ({ searchCriteria }) => {
  const [bookedRoom, setBookedRoom] = useState(null); // State to track booked room

  const rooms = [
    { 
      id: 1, 
      hotel: 'Metropolitan Suites', 
      type: 'Single', 
      price: 100, 
      amenities: ['Free Wi-Fi', 'Gym', 'Restaurant'],
      features: ['Queen-sized bed', 'City view', 'Private bathroom'],
      location: 'Downtown area, near shopping centers',
      specialOffers: ['Stay 3 nights, get 1 night free'],
      Country: 'Greece',
      City: 'Athens'
    },
    { 
      id: 2, 
      hotel: 'Oceanic Retreat Resort', 
      type: 'Double', 
      price: 150, 
      amenities: ['Swimming pool', 'Spa', 'Bar'],
      features: ['King-sized bed', 'Ocean view', 'Balcony'],
      location: 'Beachfront property, close to attractions',
      specialOffers: ['10% off for early bookings'],
      Country: 'Greece',
      City: 'Athens'
    },
    { 
      id: 3, 
      hotel: 'Skyline View Hotel', 
      type: 'Suite', 
      price: 200, 
      amenities: ['Free breakfast', 'Business center', 'Concierge'],
      features: ['Master bedroom', 'Living room', 'Kitchenette'],
      location: 'City center, convenient for business travelers',
      specialOffers: ['Complimentary airport shuttle'],
      Country: 'Greece',
      City: 'Athens'
    },
    { 
      id: 4, 
      hotel: 'Sunset Haven Resort', 
      type: 'Family', 
      price: 250, 
      amenities: ['Outdoor pool', 'Children’s play area', 'Fitness center'],
      features: ['Two bedrooms', 'Mountain view', 'Private terrace'],
      location: 'Scenic location, ideal for family vacations',
      specialOffers: ['Family package with complimentary meals'],
      Country: 'Greece',
      City: 'Athens'
    },
  ];

  // Filter rooms based on search criteria if it exists
  const filteredRooms = searchCriteria ? rooms.filter(room => {
    return (
      searchCriteria.country && room.country === searchCriteria.country &&
      room.maxAdults >= searchCriteria.numAdults &&
      room.maxChildren >= searchCriteria.numChildren &&
      room.availableMonths.includes(searchCriteria.checkInMonth) &&
      room.availableMonths.includes(searchCriteria.checkOutMonth)
      // Add more conditions as needed
    );
  }) : [];

  const handleBooking = (roomId) => {
    setBookedRoom(roomId); // Update booked room state
  };

  const closePopup = () => {
    setBookedRoom(null); // Clear booked room state to close popup
  };

  return (
    <div className="booking-container">
      <h1>Book a Room</h1>
      {filteredRooms.length > 0 ? (
        filteredRooms.map(room => (
          <div key={room.id} className="room">
            <h2>{room.hotel}</h2>
            <p>Type: {room.type}</p>
            <p>Price: ${room.price} per night</p>
            <p>Amenities: {room.amenities.join(', ')}</p>
            <p>Features: {room.features.join(', ')}</p>
            <p>Location: {room.location}</p>
            <p>Special Offers: {room.specialOffers.join(', ')}</p>
            {bookedRoom === room.id && (
              <Popup onClose={closePopup} />
            )}
            {bookedRoom !== room.id && (
              <button onClick={() => handleBooking(room.id)}>Book Now</button>
            )}
          </div>
        ))
      ) : (
        <p>No matching rooms found</p>
      )}
    </div>
  );
}

export default BookARoom;  */


// BookARoom.js

import React, { useState } from 'react';
import './BookARoom.css';
import Popup from './Popup'; // Import the Popup component

const BookARoom = ({ searchCriteria }) => {
  const [bookedRoom, setBookedRoom] = useState(null); // State to track booked room

  const rooms = [
    { 
      id: 1, 
      hotel: 'Metropolitan Suites', 
      type: 'Single', 
      price: 100, 
      amenities: ['Free Wi-Fi', 'Gym', 'Restaurant'],
      features: ['Queen-sized bed', 'City view', 'Private bathroom'],
      location: 'Downtown area, near shopping centers',
      specialOffers: ['Stay 3 nights, get 1 night free']
    },
    { 
      id: 2, 
      hotel: 'Oceanic Retreat Resort', 
      type: 'Double', 
      price: 150, 
      amenities: ['Swimming pool', 'Spa', 'Bar'],
      features: ['King-sized bed', 'Ocean view', 'Balcony'],
      location: 'Beachfront property, close to attractions',
      specialOffers: ['10% off for early bookings']
    },
    { 
      id: 3, 
      hotel: 'Skyline View Hotel', 
      type: 'Suite', 
      price: 200, 
      amenities: ['Free breakfast', 'Business center', 'Concierge'],
      features: ['Master bedroom', 'Living room', 'Kitchenette'],
      location: 'City center, convenient for business travelers',
      specialOffers: ['Complimentary airport shuttle']
    },
    { 
      id: 4, 
      hotel: 'Sunset Haven Resort', 
      type: 'Family', 
      price: 250, 
      amenities: ['Outdoor pool', 'Children’s play area', 'Fitness center'],
      features: ['Two bedrooms', 'Mountain view', 'Private terrace'],
      location: 'Scenic location, ideal for family vacations',
      specialOffers: ['Family package with complimentary meals']
    },
  ];

  // Filter rooms based on search criteria
  const filteredRooms = rooms.filter(room => {
    // Implement your filtering logic here based on the search criteria
    return true; // Replace this with your actual filtering logic
  });

  const handleBooking = (roomId) => {
    setBookedRoom(roomId); // Update booked room state
  };

  const closePopup = () => {
    setBookedRoom(null); // Clear booked room state to close popup
  };

  return (
    <div className="booking-container">
      <h1>Book a Room</h1>
      {filteredRooms.map(room => (
        <div key={room.id} className="room">
          <h2>{room.hotel}</h2>
          <p>Type: {room.type}</p>
          <p>Price: ${room.price} per night</p>
          <p>Amenities: {room.amenities.join(', ')}</p>
          <p>Features: {room.features.join(', ')}</p>
          <p>Location: {room.location}</p>
          <p>Special Offers: {room.specialOffers.join(', ')}</p>
          {bookedRoom === room.id && (
            <Popup onClose={closePopup} />
          )}
          {bookedRoom !== room.id && (
            <button onClick={() => handleBooking(room.id)}>Book Now</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default BookARoom;  