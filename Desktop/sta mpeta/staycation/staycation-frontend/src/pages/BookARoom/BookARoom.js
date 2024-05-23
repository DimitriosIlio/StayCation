/* import React, { useState } from 'react';
import './BookARoom.css';
import Popup from './Popup';
import { useLocation } from 'react-router-dom';

const BookARoom = () => {
  const [bookedRoom, setBookedRoom] = useState(null);

  const { state } = useLocation();
  const { inputSearchQuery, inputCheckInDate, inputCheckOutDate, inputNumAdults, inputNumChildren, inputNumRooms } = state;
  console.log(state);

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
      country: 'USA',
      city: 'New York'
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
      country: 'Greece',
      city: 'Amorgos'
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
      country: 'England',
      city: 'London'
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
      country: 'Spain',
      city: 'Barcelona'
    },
    {
      id: 5,
      hotel: 'Suburbian Hotel',
      type: 'Deluxe',
      price: 300,
      amenities: ['Spa', 'Restaurant', 'Conference facilities'],
      features: ['King-sized bed', 'Garden view', 'Private balcony'],
      location: 'Suburban area, peaceful surroundings',
      specialOffers: ['Free spa access with 2-night stay'],
      country: 'Greece',
      city: 'Patras'
    }
  ];

  // Filter rooms based on search criteria
  const filteredRooms = rooms.filter(room => {
    const matchesSearchQuery = inputSearchQuery ? room.hotel.toLowerCase().includes(inputSearchQuery.toLowerCase()) : true;
    const matchesNumAdults = inputNumAdults ? room.type.toLowerCase().includes('family') || room.type.toLowerCase().includes('suite') || inputNumAdults <= 2 : true;
    const matchesNumChildren = inputNumChildren ? room.type.toLowerCase().includes('family') : true;

    return matchesSearchQuery && matchesNumAdults && matchesNumChildren;
  });

  const handleBooking = (roomId) => {
    setBookedRoom(roomId);
  };

  const closePopup = () => {
    setBookedRoom(null);
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
        <p>No rooms match your search criteria.</p>
      )}
    </div>
  );
}

export default BookARoom;  */



 
  // BookARoom.js

/*  import React, { useState } from 'react';
  import './BookARoom.css';
  import Popup from './Popup'; // Import the Popup component

const BookARoom = () => {
  const { searchCriteria } = useContext(SearchContext);
  const [bookedRoom, setBookedRoom] = useState(null);

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
      Country: 'USA',
      City: 'New York'
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
      City: 'Amorgos'
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
      Country: 'England',
      City: 'London'
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
      Country: 'Spain',
      City: 'Barcelona'
    },
    { 
      id: 5, 
      hotel: 'Suburbian Hotel', 
      type: 'Deluxe', 
      price: 300, 
      amenities: ['Spa', 'Restaurant', 'Conference facilities'],
      features: ['King-sized bed', 'Garden view', 'Private balcony'],
      location: 'Suburban area, peaceful surroundings',
      specialOffers: ['Free spa access with 2-night stay'],
      Country: 'Greece',
      City: 'Patras'
    }
  ];

  const filteredRooms = rooms.filter(room => {
    const matchesQuery = room.hotel.toLowerCase().includes(searchCriteria.query.toLowerCase()) || 
                         room.City.toLowerCase().includes(searchCriteria.query.toLowerCase());
    const matchesLocation = room.location.toLowerCase().includes(searchCriteria.query.toLowerCase());

    return matchesQuery || matchesLocation;
  });

  const handleBooking = (roomId) => {
    setBookedRoom(roomId);
  };

  const closePopup = () => {
    setBookedRoom(null);
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

export default BookARoom;  */ 


  // BookARoom.js

// BookARoom.js

/* import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BookARoom.css';
import Popup from './Popup'; // Import the Popup component

const BookARoom = () => {
  const [bookedRoom, setBookedRoom] = useState(null); // State to track booked room
  const navigate = useNavigate();
  const location = useLocation();
  const searchCriteria = location.state?.searchCriteria || {};

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
      Country: 'USA',
      City: 'New York'
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
      City: 'Amorgos'
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
      Country: 'England',
      City: 'London'
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
      Country: 'Spain',
      City: 'Barcelona'
    },
    { 
      id: 5, 
      hotel: 'Suburbian Hotel', 
      type: 'Deluxe', 
      price: 300, 
      amenities: ['Spa', 'Restaurant', 'Conference facilities'],
      features: ['King-sized bed', 'Garden view', 'Private balcony'],
      location: 'Suburban area, peaceful surroundings',
      specialOffers: ['Free spa access with 2-night stay'],
      Country: 'Greece',
      City: 'Patra'
    }
  ];

  const filteredRooms = rooms.filter(room => {
    const { searchQuery, checkInDate, checkOutDate, numAdults, numChildren, numRooms } = searchCriteria;
  
    return (!searchQuery || room.hotel.toLowerCase().includes(searchQuery.toLowerCase())) &&
           (!checkInDate || roomIsAvailable(checkInDate, checkOutDate, room)) &&
           (!numAdults || room.numAdults >= numAdults) &&
           (!numChildren || room.numChildren >= numChildren) &&
           (!numRooms || room.numRooms >= numRooms);
  });
  
  const roomIsAvailable = (checkInDate, checkOutDate, room) => {
    // Placeholder for actual date comparison logic
    // Here we check if there's any overlap between the booked dates and the requested dates
    const bookedDates = room.bookedDates || []; // Assuming each room has an array of booked dates
    for (const date of bookedDates) {
      // Check if the requested dates overlap with any booked dates
      if (date >= checkInDate && date <= checkOutDate) {
        return false; // Room is not available for the requested dates
      }
    }
    return true; // Room is available for the requested dates
  };
  
  

  const handleBooking = (roomId) => {
    const room = rooms.find(room => room.id === roomId);
    navigate('/book-a-room', { state: { room } }); // Navigate to room-details page with room data
  };

  const closePopup = () => {
    setBookedRoom(null); // Clear booked room state to close popup
  };

  return (
    <div className="booking-container">
      <h1>Book a Room</h1>
      {filteredRooms.length > 0 ? filteredRooms.map(room => (
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
      )) : (
        <p>No rooms available based on your search criteria.</p>
      )}
    </div>
  );
};

export default BookARoom;   */

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
        specialOffers: ['Stay 3 nights, get 1 night free'],
        Country: 'USA',
        City: 'New York'
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
        City: 'Amorgos'
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
        Country: 'England',
        City: 'London'
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
        Country: 'Spain',
        City: 'Barcelona'
      },
      { 
        id: 5, 
        hotel: 'Suburbian Hotel', 
        type: 'Deluxe', 
        price: 300, 
        amenities: ['Spa', 'Restaurant', 'Conference facilities'],
        features: ['King-sized bed', 'Garden view', 'Private balcony'],
        location: 'Suburban area, peaceful surroundings',
        specialOffers: ['Free spa access with 2-night stay'],
        Country: 'Greece',
        City: 'Patra'
      }
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