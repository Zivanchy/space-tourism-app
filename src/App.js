import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DataProvider } from './DataProvider';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import Destinations from './pages/Destinations/Destinations';
import Crew from './pages/Crew/Crew';
import Technology from './pages/Technology/Technology';

import './sass/styles.css';

const App = () => {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/destinations/:id" element={<Destinations />} />
            <Route path="/crew/:id" element={<Crew />} />
            <Route path="/technology/:id" element={<Technology />} />
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
};

export default App;
