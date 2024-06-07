import React from 'react';
import './doing-test.css';

const DoTest = () => {
  return (
    <div className="do-test">
      <header className="header">
        <div className="title">HiQuiz</div>
        <div className="profile-icon">K</div>
      </header>
      <div className="timer">
        <span role="img" aria-label="alarm-clock">⏰</span> 05:00 min
      </div>
      <div className="question">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis id lectus nec dictum.
        Praesent bibendum ultrices purus,Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus sagittis id lectus nec dictum. Praesent bibendum ultrices purus,
      </div>
      <div className="options">
        <div className="option">
          <input type="radio" id="A" name="option" value="A" />
          <label htmlFor="A">A</label>
        </div>
        <div className="option">
          <input type="radio" id="B" name="option" value="B" />
          <label htmlFor="B">B</label>
        </div>
        <div className="option">
          <input type="radio" id="C" name="option" value="C" />
          <label htmlFor="C">C</label>
        </div>
        <div className="option">
          <input type="radio" id="D" name="option" value="D" />
          <label htmlFor="D">D</label>
        </div>
      </div>
      <div className="navigation">
        <button className="nav-button">previous</button>
        <button className="nav-button">next</button>
      </div>
    </div>
  );
};

export default DoTest;