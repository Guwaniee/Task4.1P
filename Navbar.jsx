import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">Art FACTORY</div>
      <div className="navbar-right">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#artists">Artists</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#cart">Cart</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

