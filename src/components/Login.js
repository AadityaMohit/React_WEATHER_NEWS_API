import React, { useState,useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; 
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css';  
import cartoonImage from '../components/Assets/Remove background project.png' 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
  const [content, setcontent] = useState('Heyy ! Welcome 🕶️')
  useEffect(() => {

    let a={
      "a":"Heyy ! Welcome 🕶️",
      "b":"Make Your LogIn",
      "c":"Enjoy Hitting the API'S"
    }
    let keys=Object.keys(a)
    let index=0
    const interval=setInterval(() => {
      
setcontent(a[keys[index]])
index=(index+1)%keys.length


    }, 2000);
  }, [])
  

  return (
    <div className="login-container">
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
        <button type="submit" className="login-button">Login</button>
        <p>
          Don't have an account? <Link to="/signup" className="signup-link">Sign up here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
