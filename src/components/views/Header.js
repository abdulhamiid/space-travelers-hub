import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Space Travelers&apos; Hub</h1>

      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <button className="hamburger-icon" onClick={toggleMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        {isOpen && (
        <nav className="menu">
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/">Rockets</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/missions">Missions</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/my-profile">My Profile</NavLink>
        </nav>
        )}
      </div>
    </header>

  );
};

export default HamburgerMenu;
