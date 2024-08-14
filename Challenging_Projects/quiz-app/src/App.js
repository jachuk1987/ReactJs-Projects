import React, { useState } from 'react';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import './App.css';

const App = () => {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuizComplete = (finalScore) => {
    setScore(finalScore);
    setQuizCompleted(true);
  };

  const handleRestart = () => {
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="app-container">
      <h1>React Quiz App</h1>
      {quizCompleted ? (
        <Result score={score} totalQuestions={3} onRestart={handleRestart} />
      ) : (
        <Quiz onQuizComplete={handleQuizComplete} />
      )}
    </div>
  );
};

export default App;
