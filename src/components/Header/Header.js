import React from 'react';
import './Header.css';
import sonyLogo from '../assets/sony.svg';
import godOfWarLogo from '../assets/logo.jpg';

function Header() {
  return (
    <header>
      <div className="container">
        <img src={sonyLogo} className="sony" alt="" data-aos="fade-right" />
        <img src={godOfWarLogo} className="logo" alt="Logo God of War" data-aos="zoom-in" />
        <div className="platform" data-aos="fade-left">
          <span>Disponível para</span>
          <ul>
            <li>PS4</li>
            <li>PS5</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
