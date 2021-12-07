import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Destinations from './pages/Destinations/Destinations';
import Crew from './pages/Crew/Crew';

import './sass/styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/destinations/:id" element={<Destinations />} />
          <Route path="/crew/:id" element={<Crew />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
