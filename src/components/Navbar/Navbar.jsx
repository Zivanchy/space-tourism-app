import React from 'react';

import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar__logo" />
      <nav className="navbar__container">
        <ul className="navbar__menu">
          <li className="navbar__menu-item">00 Home</li>
          <li className="navbar__menu-item">01 Destination</li>
          <li className="navbar__menu-item">02 Crew</li>
          <li className="navbar__menu-item">03 Technology</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
