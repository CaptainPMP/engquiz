'use client';
import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CountdownTimer from '@/components/CountdownTimer';

function DoTest() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const mockQuestions = [
      {
        question: 'My name is Adam, _____ Adam Peterson.',
        options: ["A. I am", "B. He is", "C. She is", "D.They are"],
        answer: "A",
      },
      {
        question: '_____ name is Anna. _____ Ann Anna.',
        options: ["A. Her, She's", "B. He, He's", "C. She, She's", "D.They, They're"],
        answer: "A",
      },
      {
        question: 'Hello, What ___ your name?',
        options: ["A. is", "B. are", "C. am", "D.be"],
        answer: "A",
      },
      {
        question: 'Where _____ Peter from?, _____ is from US',
        options: ["A. is, He's", "B. are, He's", "C. am, She's", "D.be, They're"],
        answer: "A",
      },
      {
        question: '_____ are you from? Korea.',
        options: ["A. Where", "B. What", "C. Who", "D.When"],
        answer: "A",
      },
      {
        question: 'Where _____ you _____?',
        options: ["A. are, from", "B. is, from", "C. am, from", "D.be, from"],
        answer: "A",
      },
      {
        question: '_____ from Spain. I am Rodriguez.',
        options: ["A. I am", "B. He is", "C. She is", "D.They are"],
        answer: "A",
      },
      {
        question: 'Pierre is a French boy. _____ from _____.',
        options: ["A. He's, French", "B. She's, French", "C. They're, French", "D.I am, French"],
        answer: "A",
      },
    ];
    setQuestions(mockQuestions);
  }, []);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleOptionChange = (index, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestion]: option
    });
  };

  const handleSubmit = () => {
    let totalScore = 0;
    questions.forEach((question, index) => {
      if (selectedOptions[index] === question.answer) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
    alert(`Your score is: ${totalScore} out of ${questions.length}`);
    router.push({
      pathname: '/exam-result',
      query: { score: totalScore, total: questions.length },
    });
  };

  return (
        <div>
          <Navbar />
  
            <div className="CountdownTimer mt-10" >
              <span role="img" aria-label="alarm-clock">
                <CountdownTimer onTimeUp={handleSubmit} />
              </span>
            </div>
  
            <div className="question-container">
              {questions.length > 0 ? (
                <div>
                  <h2 className="font-bold mb-20 flex justify-center pr-20 text-center mt-10">
                    {questions[currentQuestion].question}
                  </h2>
  
                  <div className="font-medium text">
                    {questions[currentQuestion].options.map((option, index) => (
                      <div className="option" key={index}>
                        <input
                          type="radio"
                          id={`option-${index + 1}`}
                          name="option"
                          value={option[0]}
                          checked={selectedOptions[currentQuestion] === option[0]}
                          onChange={() => handleOptionChange(currentQuestion, option[0])}
                        />
                        <label htmlFor={`option-${index + 1}`}>{option}</label>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p>Loading questions...</p>
              )}
            </div>
  
            <div className="navigation flex space-x-4">
              <button
                className="bg-custom-footer hover:bg-custom-pink text-white font-bold py-2 px-4 rounded mt-10 mb-10"
                onClick={handlePrevious}
              >
                Previous
              </button>
  
              <button
                className="bg-custom-footer hover:bg-custom-pink text-white font-bold py-2 px-4 rounded mt-10 mb-10"
                onClick={handleNext}>
                Next
              </button>
  
              <button
                className="bg-custom-pink hover:bg-custom-footer text-white font-bold py-2 px-4 rounded mt-10 mb-10"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
  
          <Footer />
        </div>
    );
  }

export default DoTest;