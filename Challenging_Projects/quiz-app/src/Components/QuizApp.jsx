import React, { Component } from 'react';
import './QuizApp.css';

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      score: 0,
      showScore: false,
    };
  }

  questions = [
    {
      question: "Which is the largest animal in the world?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
      ],
    },
    {
      question: "Which is the smallest country in the world?",
      answers: [
        { text: "Vatican City", correct: true },
        { text: "Bhutan", correct: false },
        { text: "Nepal", correct: false },
        { text: "Sri Lanka", correct: false },
      ],
    },
    {
      question: "Which is the largest desert in the world?",
      answers: [
        { text: "Kalahari", correct: false },
        { text: "Gobi", correct: false },
        { text: "Sahara", correct: false },
        { text: "Antarctica", correct: true },
      ],
    },
    {
      question: "Which is the smallest continent in the world?",
      answers: [
        { text: "Asia", correct: false },
        { text: "Australia", correct: true },
        { text: "Arctic", correct: false },
        { text: "Africa", correct: false },
      ],
    },
  ];

  handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }

    this.setState({ showScore: true });
  };

  handleNextButtonClick = () => {
    const nextQuestionIndex = this.state.currentQuestionIndex + 1;
    if (nextQuestionIndex < this.questions.length) {
      this.setState({
        currentQuestionIndex: nextQuestionIndex,
        showScore: false,
      });
    } else {
      this.setState({
        showScore: false,
        currentQuestionIndex: 0,
        score: 0,
      });
    }
  };

  render() {
    const { currentQuestionIndex, score, showScore } = this.state;
    const currentQuestion = this.questions[currentQuestionIndex];

    return (
      <div className="app">
        <h1>Simple Quiz</h1>
        <div className="quiz">
          <h2 id="question">
            {currentQuestionIndex + 1}. {currentQuestion.question}
          </h2>
          <div id="answer-buttons">
            {currentQuestion.answers.map((answer, index) => (
              <button
                key={index}
                className={`btn ${showScore ? (answer.correct ? 'correct' : 'incorrect') : ''}`}
                onClick={() => this.handleAnswerButtonClick(answer.correct)}
                disabled={showScore}
              >
                {answer.text}
              </button>
            ))}
          </div>
          <button
            id="next-btn"
            style={{ display: showScore ? 'block' : 'none' }}
            onClick={this.handleNextButtonClick}
          >
            {currentQuestionIndex + 1 < this.questions.length ? 'Next' : 'Play Again'}
          </button>
        </div>
        {showScore && currentQuestionIndex + 1 === this.questions.length && (
          <div>
            <h2>You scored {score} out of {this.questions.length}!</h2>
          </div>
        )}
      </div>
    );
  }
}

export default QuizApp;
