// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage'; 
import Hotels from './pages/Hotels/Hotels'; 
import BookARoom from './pages/BookARoom/BookARoom'; 
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer"; 

function App() {
  // Define handleSearch function
  const handleSearch = (searchCriteria) => {
    // Your search logic here
    console.log("Search Criteria:", searchCriteria);
    // You can set the search criteria state here and pass it to the BookARoom component
    setSearchCriteria(searchCriteria);
  };

  const [searchCriteria, setSearchCriteria] = useState(null);

  return (
    <Router>
      <div className="App">
        <Navbar /> 
        {/* Pass handleSearch as onSearch prop */}
        <SearchBar onSearch={handleSearch} /> 
        <Routes>
          <Route exact path="/" element={<Homepage />} /> 
          <Route path="/hotels" element={<Hotels />} /> 
          {/* Pass searchCriteria to BookARoom */}
          <Route path="/book-a-room" element={<BookARoom searchCriteria={searchCriteria} />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;



/* import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Homepage from './pages/Homepage/Homepage';
import Hotels from './pages/Hotels/Hotels';
import BookARoom from './pages/BookARoom/BookARoom';
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <SearchBar /> 
        <Routes>
          <Route exact path="/" element={message ? <Message message={message} /> : <Homepage />} /> 
          <Route path="/hotels" element={<Hotels />} /> 
          <Route path="/book-a-room" element={<BookARoom />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App; */