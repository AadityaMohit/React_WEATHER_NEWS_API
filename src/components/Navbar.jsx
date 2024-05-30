// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">React App</div>
      {/* <div><Link className="navbar__brand" to='/'>React App </Link></div>  */}
      {/* <div><Link className="navbar__brand" to='/weather'>Weather_Now</Link></div>  */}
      <ul className="navbar__links">
        
        <li><Link className="navbar__link_text" to='/weather'>Weather_Now</Link></li>
        <li className="navbar__link">
          <Link to="/about" className="navbar__link__text">About</Link>
        </li>
        <li className="navbar__link">
          <Link to="/" className="navbar__link__text">Home</Link>
        </li>
        <li className="navbar__link">
          <Link to="/contact" className="navbar__link__text">Contact</Link>
        </li>
<li><Link className="navbar__link" to='/news'>News_Now</Link></li>
        <li className="navbar__link">
          <Link to="/signup" className="navbar__link__text">Sign Up</Link>
        </li>
        <li className="navbar__link">
          <Link to="/login" className="navbar__link__text">Log In</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
