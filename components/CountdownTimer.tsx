import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ onTimeUp }) => {
  const [timeRemaining, setTimeRemaining] = useState(5 * 60);

  useEffect(() => {
    if (timeRemaining === 0) {
      onTimeUp();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeRemaining((timeRemaining) => timeRemaining - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeRemaining, onTimeUp]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="timer">
      <span role="img" aria-label="alarm-clock">⏰</span>
      {minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}
    </div>
  );
};

export default CountdownTimer;
