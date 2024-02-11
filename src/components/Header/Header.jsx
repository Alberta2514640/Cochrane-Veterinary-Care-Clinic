import React from 'react';
import { Link } from 'react-router-dom'; 
import image from '../../assets/logo.jpg';
import './Header.css';

const Header = () => {
  return (
    <nav>
    <ul>
    <img class="Corner-Logo" src={image} alt="Logo" />
    <p class="Website-Title"> Cochrane Veterinary Care Clinic</p>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about-us">About Us</Link></li>
    <li><Link to="/contact-us">Contact Us</Link></li>
    </ul>
  </nav>
  );
};

export default Header;
