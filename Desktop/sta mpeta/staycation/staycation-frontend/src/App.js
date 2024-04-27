import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage"; 
import List from "./pages/list/list";
import Hotel from "./pages/Hotel/Hotel";
import Navbar from "./components/Navbar"; // Changed to default import
import Login from "./components/Login"; // Changed to default import
import Register from "./components/Register"; // Changed to default import
import Auth from "./pages/Auth"; // Changed to named import

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Homepage/>}/> 
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
