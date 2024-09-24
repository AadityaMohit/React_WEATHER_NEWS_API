import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="news-navbar">
      <div className="navbar__brand">React App</div>
      <div className={`navbar__links ${isOpen ? 'active' : ''}`}>
        <li><Link className="navbar__link_text" to='/weather'>Weather_Now</Link></li>
        <li className="navbar__link"><Link to="/about" className="navbar__link__text">About</Link></li>
        <li className="navbar__link"><Link to="/" className="navbar__link__text">Home</Link></li>
        <li className="navbar__link"><Link to="/contact" className="navbar__link__text">Contact</Link></li>
        <li><Link className="navbar__link" to='/news'>News_Now</Link></li>

      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
