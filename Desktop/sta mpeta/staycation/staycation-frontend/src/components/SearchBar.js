// SearchBar.js

import React, { useContext, useState } from 'react';
import './SearchBar.css';
import { GlobalContext } from '../GlobalContext';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const navigate = useNavigate();
  const [inputSearchQuery, setInputSearchQuery] = useState("");
  const [inputCheckInDate, setInputCheckInDate] = useState('');
  const [inputCheckOutDate, setInputCheckOutDate] = useState('');
  const [inputNumAdults, setInputNumAdults] = useState('1');
  const [inputNumChildren, setInputNumChildren] = useState('0');
  const [inputNumRooms, setInputNumRooms] = useState('1');

  const {
    setSearchQuery, setCheckInDate, setCheckOutDate,
    setNumAdults, setNumChildren, setNumRooms
  } = useContext(GlobalContext);

  const submitForm = (e) => {
    e.preventDefault();
    setSearchQuery(inputSearchQuery);
    setCheckInDate(inputCheckInDate);
    setCheckOutDate(inputCheckOutDate);
    setNumAdults(inputNumAdults);
    setNumChildren(inputNumChildren);
    setNumRooms(inputNumRooms);
    navigate("/book-a-room");
  };

  return (
    <form onSubmit={submitForm} className="search-bar-container">
      <div className="search-bar-input-wrapper">
        <label htmlFor="query">Search hotels:</label>
        <input
          className="search-bar-input"
          type="text"
          id="query"
          placeholder="Enter a location or hotel name"
          value={inputSearchQuery}
          onChange={(e) => setInputSearchQuery(e.target.value)}
        />
      </div>
      <div className="search-bar-input-wrapper">
        <label htmlFor="checkInDate">Check-in date:</label>
        <input
          className="search-bar-input"
          type="date"
          id="checkInDate"
          value={inputCheckInDate}
          onChange={(e) => setInputCheckInDate(e.target.value)}
        />
      </div>
      <div className="search-bar-input-wrapper">
        <label htmlFor="checkOutDate">Check-out date:</label>
        <input
          className="search-bar-input"
          type="date"
          id="checkOutDate"
          value={inputCheckOutDate}
          onChange={(e) => setInputCheckOutDate(e.target.value)}
        />
      </div>
      <div className="search-bar-input-wrapper">
        <label htmlFor="numAdults">Number of adults:</label>
        <input
          className="search-bar-input"
          type="number"
          id="numAdults"
          value={inputNumAdults}
          onChange={(e) => setInputNumAdults(e.target.value)}
          min="1"
        />
      </div>
      <div className="search-bar-input-wrapper">
        <label htmlFor="numChildren">Number of children:</label>
        <input
          className="search-bar-input"
          type="number"
          id="numChildren"
          value={inputNumChildren}
          onChange={(e) => setInputNumChildren(e.target.value)}
          min="0"
        />
      </div>
      <div className="search-bar-input-wrapper">
        <label htmlFor="numRooms">Number of rooms:</label>
        <input
          className="search-bar-input"
          type="number"
          id="numRooms"
          value={inputNumRooms}
          onChange={(e) => setInputNumRooms(e.target.value)}
          min="1"
        />
      </div>
      <button type="submit" className="search-bar-button">Search</button>
    </form>
  );
};

export default SearchBar;
