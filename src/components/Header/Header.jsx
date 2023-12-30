import React from 'react';
import { Link } from 'react-router-dom'; 
import image from '../../assets/logo.jpg';

const Header = () => {
  return (
    <nav>
    <ul>
    <img class="Corner-Logo" src={image} alt="Logo" />
    <p class="Website-Title"> Cochrane Vetrinary Care Clinic</p>
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
