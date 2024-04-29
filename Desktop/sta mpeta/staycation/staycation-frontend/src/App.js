import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage'; 
import Hotels from './pages/Hotels/Hotels'; 
import BookARoom from './pages/BookARoom/BookARoom'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} /> 
          <Route path="/hotels" element={<Hotels />} /> 
          <Route path="/book-a-room" element={<BookARoom />} /> 
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
