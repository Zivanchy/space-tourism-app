import React from 'react';

import backgroundImage from '../../assets/home/background-home-desktop.jpg';

const Home = () => {
  return (
    <div className="home">
      <img
        src={backgroundImage}
        alt="background"
        className="home__background"
      />
    </div>
  );
};

export default Home;
