import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <nav>
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about-us">About Us</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/news">News</Link></li>
    <li><Link to="/contact-us">Contact Us</Link></li>
    </ul>
  </nav>
  );
};

export default Header;
