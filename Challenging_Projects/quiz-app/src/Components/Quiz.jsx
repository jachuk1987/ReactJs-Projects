import React, { useState } from 'react';
import Question from './Question';

const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Lisbon'],
    answer: 2,
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 1,
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'J.K. Rowling', 'George Orwell', 'Jane Austen'],
    answer: 0,
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    answer: 3,
  },
];

const Quiz = ({ onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleSelectOption = (index) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      if (selectedOption === quizData[currentQuestionIndex].answer) {
        setScore(score + 1);
      }
      setSelectedOption(null);
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        onQuizComplete(score + 1);
      }
    }
  };

  return (
    <div className="quiz-container">
      <Question
        question={quizData[currentQuestionIndex].question}
        options={quizData[currentQuestionIndex].options}
        selectedOption={selectedOption}
        onSelectOption={handleSelectOption}
      />
      <button onClick={handleNextQuestion} className="next-button">
        Next
      </button>
    </div>
  );
};

export default Quiz;
