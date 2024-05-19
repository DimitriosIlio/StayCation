// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage'; 
import Hotels from './pages/Hotels/Hotels'; 
import BookARoom from './pages/BookARoom/BookARoom'; 
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer"; 
import { GlobalProvider } from './GlobalContext';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="App">
          <Navbar />
          <SearchBar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/book-a-room" element={<BookARoom />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
