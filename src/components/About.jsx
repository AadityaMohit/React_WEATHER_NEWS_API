import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css'; // Import custom CSS for styling

function About() {
  return (
    <div className="about-container">
      <Container>
        <Row>
          <Col>
            <div className="info-section">
              <h2>About Me</h2>
              <p>
                My name is Aaditya Mohit, and I'm a Full Stack Web Developer with expertise in React and the MERN stack.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div className="info-section">
              <h2>About This Project</h2>
              <p>
                This project consists of several components, including a Weather App, a News App, and TextUtils. The Weather App provides weather forecasts, the News App fetches latest news articles, and TextUtils offers text manipulation utilities.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
