import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage'; 
import Hotels from './pages/Hotels/Hotels'; 
import BookARoom from './pages/BookARoom/BookARoom'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} /> 
          <Route path="/hotels" component={Hotels} /> 
          <Route path="/book-a-room" component={BookARoom} /> 
          {/* Add more routes for other pages */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
