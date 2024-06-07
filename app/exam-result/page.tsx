'use client'
import React from 'react';
import './exam-result.css';

const ExamResult = () => {
  return (
    <div className="exam-result-container">
      <header className="header">
      <div className="logo">Hi Quiz</div>
        <div className="user-profile">
          <span className="home-link">Home</span>
          <span className="user-initial">K</span>
        </div>
      </header>
      <div className="exam-result">
        <h1>Exam Result</h1>
        <h2>Easy Mode Test 1</h2>
        <div className="result-grid">
          <div className="result-item">
            <span className="result-label">Total Score</span>
            <span className="result-value">?/8</span>
          </div>
          <div className="result-item">
            <span className="result-label">Vocab</span>
            <span className="result-value">?/2</span>
          </div>
          <div className="result-item">
            <span className="result-label">Grammar</span>
            <span className="result-value">?/2</span>
          </div>
          <div className="result-item">
            <span className="result-label">Time</span>
            <span className="result-value">04:37</span>
          </div>
          <div className="result-item">
            <span className="result-label">Reading</span>
            <span className="result-value">?/2</span>
          </div>
          <div className="result-item">
            <span className="result-label">Conversation</span>
            <span className="result-value">?/2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamResult;