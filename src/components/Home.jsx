import React from 'react';
import logo from './Assets/img.jpeg'; 
import '../App.css'
// Import your logo image
import newsIcon from './Assets/Screenshot 2024-05-07 203545.png'; // Import weather icon
import textUtilsIcon from './Assets/text.png'; // Import text utils icon
import weatherIcon from './Assets/p.png'; // Import news icon
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div style={styles.container} className="fade-in">
      <img src={logo} alt="Logo" style={{ ...styles.logo, ...styles.motion }} />
      <h1 style={styles.heading}>Welcome to Our Page</h1>
      <p style={styles.description}>
        Explore our features:
      </p>
      <div style={styles.featureContainer}>
        <Link to="/weather" style={styles.feature}>
          <img src={weatherIcon} alt="Weather App" style={styles.featureIcon} />
          <h2>Weather App 🌡️☁️</h2>
          <p>Check the weather in any city</p>
        </Link>
        <Link to="/text-utils" style={styles.feature}>
          <img src={textUtilsIcon} alt="Text Utils" style={styles.featureIcon} />
          <h2>Text Utils 📄</h2>
          <p>Convert text, format text, and more</p>
        </Link>
        <Link to="/news" style={styles.feature}>
          <img src={newsIcon} alt="News App" style={styles.featureIcon} />
          <h2>News App</h2>
          <p>Stay updated with the latest news</p>
        </Link>
        {/* Add more features here */}
      </div>
    </div>
  );
}

const styles = {
  container: {

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #4e1478, #891eb4)',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    
  },
  logo: {
    width: '200px',
    marginBottom: '20px',
    borderRadius: '20px',
    opacity: '0.8',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '24px',
    marginBottom: '40px',
  },
  featureContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
    
  },
  feature: {
    background: 'rgba(255, 255, 255, 0.1)',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    minWidth: '250px',
    maxWidth: '300px',
    textDecoration: 'none', // Remove underline from links
    color: 'white', // Text color for links
  },
  featureIcon: {
    width: '200px', // Adjust the width of the feature icons
    marginBottom: '10px',
    borderRadius:'15px',
    animation: 'motionAnimation1 2s ease-in-out infinite', // Adjust spacing between icon and text
  },
  motion: {
    animation: 'motionAnimation 2s ease-in-out infinite',
  },
};

export default Home;
