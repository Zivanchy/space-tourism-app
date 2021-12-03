import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

import './sass/styles.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
