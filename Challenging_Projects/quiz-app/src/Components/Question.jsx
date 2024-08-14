import React from 'react';

const Question = ({ question, options, selectedOption, onSelectOption }) => {
  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === index ? 'selected' : ''}`}
            onClick={() => onSelectOption(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
