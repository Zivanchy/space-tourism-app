import React from 'react';

import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar__logo" />
      <nav className="navbar__container">
        <ul className="navbar__menu">
          <li className="navbar__menu-item">
            <span>00</span> Home
          </li>
          <li className="navbar__menu-item">
            <span>01</span> Destination
          </li>
          <li className="navbar__menu-item">
            <span>02</span> Crew
          </li>
          <li className="navbar__menu-item">
            <span>03</span> Technology
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
