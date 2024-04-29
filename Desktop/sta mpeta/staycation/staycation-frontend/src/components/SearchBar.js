// SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS file

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numAdults, setNumAdults] = useState(1); // Default to 1 adult
  const [numChildren, setNumChildren] = useState(0); // Default to 0 children
  const [numRooms, setNumRooms] = useState(1); // Default to 1 room

  const handleSearch = () => {
    onSearch({ query, checkInDate, checkOutDate, numAdults, numChildren, numRooms });
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search hotels..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input
        className="search-bar-input"
        type="date"
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
      />
      <input
        className="search-bar-input"
        type="date"
        value={checkOutDate}
        onChange={(e) => setCheckOutDate(e.target.value)}
      />
      <input
        className="search-bar-input"
        type="number"
        value={numAdults}
        onChange={(e) => setNumAdults(parseInt(e.target.value))}
        min="1"
      />
      <input
        className="search-bar-input"
        type="number"
        value={numChildren}
        onChange={(e) => setNumChildren(parseInt(e.target.value))}
        min="0"
      />
      <input
        className="search-bar-input"
        type="number"
        value={numRooms}
        onChange={(e) => setNumRooms(parseInt(e.target.value))}
        min="1"
      />
      <button className="search-bar-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
