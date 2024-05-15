
/* searchbar.js */

import React, { useState } from 'react';
import './SearchBar.css'; 

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numAdults, setNumAdults] = useState('1'); // Ensure default value is a string
  const [numChildren, setNumChildren] = useState('0'); // Ensure default value is a string
  const [numRooms, setNumRooms] = useState('1'); // Ensure default value is a string

  const handleSearch = () => {
    onSearch({ query, checkInDate, checkOutDate, numAdults, numChildren, numRooms });
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-input-wrapper">
        <label htmlFor="query">Search hotels:</label>
        <input
          className="search-bar-input"
          type="text"
          id="query"
          placeholder="Enter a location or hotel name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="search-bar-input-wrapper">
        <label htmlFor="checkInDate">Check-in date:</label>
        <input
          className="search-bar-input"
          type="date"
          id="checkInDate"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </div>
      <div className="search-bar-input-wrapper">
        <label htmlFor="checkOutDate">Check-out date:</label>
        <input
          className="search-bar-input"
          type="date"
          id="checkOutDate"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </div>
      <div className="search-bar-input-wrapper">
        <label htmlFor="numAdults">Number of adults:</label>
        <input
          className="search-bar-input"
          type="number"
          id="numAdults"
          value={numAdults}
          onChange={(e) => setNumAdults(e.target.value)}
          min="1"
        />
      </div>
      <div className="search-bar-input-wrapper">
        <label htmlFor="numChildren">Number of children:</label>
        <input
          className="search-bar-input"
          type="number"
          id="numChildren"
          value={numChildren}
          onChange={(e) => setNumChildren(e.target.value)}
          min="0"
        />
      </div>
      <div className="search-bar-input-wrapper">
        <label htmlFor="numRooms">Number of rooms:</label>
        <input
          className="search-bar-input"
          type="number"
          id="numRooms"
          value={numRooms}
          onChange={(e) => setNumRooms(e.target.value)}
          min="1"
        />
      </div>
      <button className="search-bar-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar; 