import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';

const Header = () => (
  <header>
    <img src={logo} className="App-logo" alt="logo" />
    <h1>Space Travelers&apos; Hub</h1>
    <nav>
      <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/">Rockets</NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/missions">Missions</NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active-link' : undefined)} to="/my-profile">My Profile</NavLink>
    </nav>
  </header>
);

export default Header;
