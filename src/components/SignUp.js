import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';   
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import toastify CSS
import './SignUp.css'; 
import cartoon from './Assets/Remove background project.png'; 

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Sign-up successful! Redirecting to login...', {
        position: "top-right",
        autoClose: 3000, // Closes after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate('/login');
      }, 3000);  // Redirect after 3 seconds
    } catch (error) {
      setError(error.message);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const [content, setContent] = useState("Heyy! There 🕶️");
  useEffect(() => {
    let a = {
      "a": "Welcome! Ready to sign up?",
      "b": "Let's get you started!",
      "c": "Already have an account? Login here!"  
    };
    let keys = Object.keys(a);
    let index = 0;
    const interval = setInterval(() => {
      setContent(a[keys[index]]);
      index = (index + 1) % keys.length;
    }, 3000);

    return () => clearInterval(interval);  // Cleanup on unmount
  }, []);

  return (
    <div className="signup-container">
      <div className="cartoon-container">
        <img src={cartoon} alt="Cartoon Character" className="cartoon-character" />
        <div className="chat-box">
          <p>{content}</p>
        </div>
      </div>
      <form onSubmit={handleSignUp} className="signup-form">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit" className="signup-button">Sign Up</button>
        <p>
          Already have an account? <Link to="/login" className="login-link">Login here</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
