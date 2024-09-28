import React, { useState } from 'react';
import './Quiz.css';

const questions = [
  {
    question: "1.What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "2.What is the capital of India?",
    options: ["Kolkata", "Mumbai", "New Delhi", "Madrid"],
    answer: "New Delhi",
  },
  {
    question: "3.What is the capital of Oman?",
    options: ["Paris", "Tokyo", "Berlin", "Muscat"],
    answer: "Muscat",
  },
  {
    question: "4.What is the capital of Russia?",
    options: ["Moscow", "Oslo", "Toronto", "Muscat"],
    answer: "Moscow",
  },
  {
    question: "5.What is the capital of Germany?",
    options: ["Rome", "Seoul", "Berlin", "Madrid"],
    answer: "Berlin",
  },
  {
    question: "6.What is the capital of Italy?",
    options: ["Cairo", "Paris", "Berlin", "Rome"],
    answer: "Rome",
  },
  {
    question: "7.What is the capital of Norway?",
    options: ["Oslo", "Los angeles", "Miami", "Moscow"],
    answer: "Oslo",
  },
  {
    question: "8.What is the capital of Japan?",
    options: ["Shanghai", "Miami", "Las vegas", "Tokyo"],
    answer: "Tokyo",
  },
  {
    question: "9.What is the capital of South Korea?",
    options: ["Japan", "Seoul", "Busan", "Shanghai"],
    answer: "Seoul",
  },
  {
    question: "10.What is the capital of Malaysia?",
    options: ["Kaula Lumpur", "Berlin", "Madrid", "Denmark"],
    answer: "Kaula Lumpur", 
  }
  
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="quiz-container">
      {!submitted ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="result">
          <h2>Your score: {score} out of {questions.length}</h2>
        </div>
      )}
    </div>
  );
};

export default Quiz;
