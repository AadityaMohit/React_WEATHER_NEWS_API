import React, { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import cartoonImage from '../components/Assets/Remove background project.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailReset, setEmailReset] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [showResetForm, setShowResetForm] = useState(false); // Toggle password reset form
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, emailReset);
      setResetSent(true);
    } catch (error) {
      alert(error.message);
    }
  };

  const toggleResetForm = () => {
    setShowResetForm(!showResetForm); // Toggle the password reset form
  };

  const [content, setContent] = useState('Heyy ! Welcome to version 2.0 🕶️');

  useEffect(() => {
    const messages = {
      a: 'version 2.0 🕶️',
      b: 'Make Your LogIn',
      c: 'Enjoy Hitting the API\'s',
    };
    const keys = Object.keys(messages);
    let index = 0;
    const interval = setInterval(() => {
      setContent(messages[keys[index]]);
      index = (index + 1) % keys.length;
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="login-container">
      <div className="version-badge">Version 2.0</div>
      <div className="cartoon-container">
        <img src={cartoonImage} alt="Cartoon Character" className="cartoon-character" />
        <div className="chat-box">
          <p>{content}</p>
        </div>
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="login-button">Login</button>
        <div className="forgot-password" onClick={toggleResetForm}>
          Forgot Password?
        </div>
        <Link to="/signup" className="signup-link">
          Don't have an account? Sign Up
        </Link>
      </form>

      {showResetForm && (
        <div className="password-reset active">
          <h3>Reset your password</h3>
          <input
            type="email"
            placeholder="Enter your email"
            value={emailReset}
            onChange={(e) => setEmailReset(e.target.value)}
          />
          <button onClick={handlePasswordReset} className="reset-button">Reset Password</button>
          {resetSent && <p className="reset-message">Password reset link sent! Check your email.</p>}
        </div>
      )}
    </div>
  );
};

export default Login;
