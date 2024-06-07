'use client'
import React from 'react';
import './landing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faTrophy, faChartLine, faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Hi Quiz</div>
        <button className="login-button">LOGIN</button>
      </header>

      {/* Main Section */}
      <main className="main">
        {/* Welcome Section */}
        <section className="welcome-section">
          <h1 className="welcome-title">Welcome to Hi Quiz!</h1>
          <div className="welcome-content">
            <p className="welcome-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis id lectus nec dictum. Praesent bibendum ultrices purus.</p>
            <p className="welcome-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis id lectus nec dictum. Praesent bibendum ultrices purus.</p>
          </div>
        </section>

        {/* What's Inside Section */}
        <section className="inside-section">
          <h2 className="inside-title">What's <span className="inside-highlight">inside</span></h2>
          <div className="inside-grid">
            <div className="inside-card">
              <div className="icon-container">
                <FontAwesomeIcon icon={faFolder} className="icon" />
              </div>
              <h3 className="card-title">Category</h3>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="inside-card">
              <div className="icon-container">
                <FontAwesomeIcon icon={faTrophy} className="icon" />
              </div>
              <h3 className="card-title">Daily Challenge</h3>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="inside-card">
              <div className="icon-container">
                <FontAwesomeIcon icon={faChartLine} className="icon" />
              </div>
              <h3 className="card-title">Performance</h3>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="inside-card">
              <div className="icon-container">
                <FontAwesomeIcon icon={faLevelUpAlt} className="icon" />
              </div>
              <h3 className="card-title">Level Up!</h3>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="illustration-container">
            <img src="path_to_image.jpg" alt="Illustration" className="illustration" /> {/* Replace with actual image path */}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <button className="login-button">LOGIN</button>
      </footer>
    </div>
  );
}

export default App;