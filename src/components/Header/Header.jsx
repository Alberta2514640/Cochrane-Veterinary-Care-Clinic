import React from 'react';
import { Link } from 'react-router-dom'; 
import image from '../../assets/logo.jpg';
import './Header.css';
import { SocialIcon } from 'react-social-icons'

const Header = () => {
  return (
    <nav>
      <ul className="nav-list">
        <div className="nav-items">
          <img className="Corner-Logo" src={image} alt="Logo" />
          <p className="Website-Title"> Cochrane Veterinary Care Clinic</p>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/about-us">About Us</Link></li> */}
          <li><Link to="/contact-us">Contact Us</Link></li>
        </div>
        
        <div className="Social-Media-Icons">
          <SocialIcon url="https://www.facebook.com/CochraneVetCareClinic" />
          <SocialIcon url="https://www.youtube.com/@TheVetsDog-xs2fn" />
        </div>
      </ul>
    </nav>
  );
};

export default Header;