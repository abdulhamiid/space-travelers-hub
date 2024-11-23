import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu after navigation
  const closeMenuAfterNavigation = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <NavLink onClick={closeMenuAfterNavigation} className="header" to="/">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </NavLink>

      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>

        <button type="button" className="hamburger-icon" aria-label="lqbl4" onClick={toggleMenu}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <nav className={`nav-list ${isOpen ? 'open' : ''}`}>
          <NavLink onClick={closeMenuAfterNavigation} className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/">Rockets</NavLink>
          <NavLink onClick={closeMenuAfterNavigation} className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/missions">Missions</NavLink>
          <NavLink onClick={closeMenuAfterNavigation} className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/my-profile">My Profile</NavLink>
        </nav>
      </div>
    </header>

  );
};

export default HamburgerMenu;
