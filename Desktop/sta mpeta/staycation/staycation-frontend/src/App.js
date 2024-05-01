import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage'; 
import Hotels from './pages/Hotels/Hotels'; 
import BookARoom from './pages/BookARoom/BookARoom'; 
/*import './App.css';*/
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route exact path="/" element={<Homepage />} /> 
          <Route path="/hotels" element={<Hotels />} /> 
          <Route path="/book-a-room" element={<BookARoom />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 


        </Routes>
      </div>
    </Router>
  );
}

export default App;
