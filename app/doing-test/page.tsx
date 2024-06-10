import React from 'react';
import Navbar from '@/components/NavBar';
import QuitButton from '@/components/QuitButton';
import { useState, useEffect } from 'react';

const DoTest = () => {
  const [question, setQuestion] = useState('');

  useEffect(() => {
    const fetchQuestion = async () => {
      const { data, error } = await supabase
        .from('Questions')
        .select('Question');
        .filter('Difficulty', 'eq', 'Easy');
        .filter('Category', 'eq', '1');

        if (questionError) {
          console.error('Error fetching question:', questionError);
        } else {
          setQuestion(questionData[0].Question);
  
          const { data: choicesData, error: choicesError } = await supabase
            .from('Choices')
            .select('Choice')
            .filter('QuestionId', 'eq', questionData[0].id);
  
          if (choicesError) {
            console.error('Error fetching choices:', choicesError);
          } else {
            setChoices(choicesData.map(choice => choice.Choice));
          }
        }
      };
  
      fetchQuestionAndChoices();
    }, []);

    const handleNext = () => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    const handlePrevious = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };


return (
    <>
    <Navbar/>
    <QuitButton /> 

    <div className="question">
      {question}
    </div>

    <div className="options">
        {choices.map((choice, index) => (
          <div className="option" key={index}>
            <input type="radio" id={`option-${index}`} name="option" value={choice} />
            <label htmlFor={`option-${index}`}>{choice}</label>
          </div>
        ))}
    </div>

    <button onClick={handlePrevious}>Previous</button>
    <button onClick={handleNext}>Next</button>

    </>
  );
};      

export default DoTest;