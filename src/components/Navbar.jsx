import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';   
import { FiLogOut } from 'react-icons/fi';   
import '../App.css';   
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <nav className="news-navbar">
      <div className="navbar__brand">React App Developer Aaditya Mohit</div>
      {user ? (
        <div style={{color:"white"}}>Welcome  <u><b>{user.email}</b></u></div>
      ) : (
        <div></div>
      )}

      <div className={`navbar__links ${isOpen ? 'active' : ''}`}>
        <li><Link className="navbar__link_text" to='/weather'>Weather_Now</Link></li>
        <li className="navbar__link"><Link to="/about" className="navbar__link__text">About</Link></li>
        <li className="navbar__link"><Link to="/" className="navbar__link__text">Home</Link></li>
        <li className="navbar__link"><Link to="/contact" className="navbar__link__text">Contact</Link></li>
        <li><Link className="navbar__link" to='/news'>News_Now</Link></li>

        {user && (
          <li className="navbar__link">
            <button 
              onClick={handleLogout} 
              style={{
                background: 'linear-gradient(45deg, #9B51E0, #7A3FB4)',   
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                fontSize: '16px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',  
                transition: 'transform 0.2s, box-shadow 0.2s',   
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';   
                e.target.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.3)';   
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
              }}
            >
              <FiLogOut style={{ marginRight: '8px' }} />
              Logout
            </button>
          </li>
        )}
        <ToastContainer /> 
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ToastContainer /> 
    </nav>
  );
}

export default Navbar;
