import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="navbar__logo" />
      <nav className="navbar__container">
        <ul className="navbar__menu">
          <NavLink className="navbar__menu-link" to={'/'}>
            <li className="navbar__menu-item">
              <span>00</span> Home
            </li>
          </NavLink>
          <NavLink className="navbar__menu-link" to={'/destinations/moon'}>
            <li className="navbar__menu-item">
              <span>01</span> Destination
            </li>
          </NavLink>
          <NavLink className="navbar__menu-link" to={'/crew/DouglasHurley'}>
            <li className="navbar__menu-item">
              <span>02</span> Crew
            </li>
          </NavLink>
          <NavLink
            className="navbar__menu-link"
            to={'/technology/Launchvehicle'}
          >
            <li className="navbar__menu-item">
              <span>03</span> Technology
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
