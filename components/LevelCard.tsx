import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LevelCard = () => {
  const [level, setLevel] = useState('');

  useEffect(() => {
    const fetchLevel = async () => {
      try {
        const response = await axios.get('/api/getLevels');
        setLevel(response.data.level);
      } catch (error) {
        console.error('Error fetching level:', error);
      }
    };

    fetchLevel();
  }, []);

  let progressClassName;
  switch (level.toLowerCase()) {
    case 'easy':
      progressClassName = 'bg-green-500';
      break;
    case 'medium':
      progressClassName = 'bg-yellow-500';
      break;
    case 'hard':
      progressClassName = 'bg-red-500';
      break;
    default:
      progressClassName = 'bg-gray-200';
  }

  return (
    <div className="w-full h-2 rounded-full">
      <div className={`${progressClassName} w-1/3`}></div>
    </div>
  );
};

export default LevelCard;