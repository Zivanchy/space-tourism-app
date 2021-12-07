import React from 'react';
import { Link } from 'react-router-dom';

import backgroundImage from '../../assets/home/background-home-desktop.jpg';

const Home = () => {
  return (
    <div
      className="home page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="home__container">
        <h2 className="home__container-subtitle">So, you want to travel to</h2>
        <h1 className="home__container-title">Space</h1>
        <p className="home__container-text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <Link to={'/destinations/moon'} className="home__button">
        Explore
      </Link>
    </div>
  );
};

export default Home;
