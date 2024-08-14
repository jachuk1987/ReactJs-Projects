import React, { useState } from 'react';
import './AgeCalculator.css';

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState('');
  const [ageResult, setAgeResult] = useState('');

  const calculateAge = () => {
    if (!birthDate) {
      setAgeResult('Please select your birth date.');
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += getDaysInMonth(birth.getFullYear(), birth.getMonth());
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAgeResult(`You are ${years} years, ${months} months, and ${days} days old.`);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  return (
    <div className="container">
      <div className="calculator">
        <h1>
          JavaScript <br /> <span>Age Calculator</span>
        </h1>
        <div className="input-box">
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            max={new Date().toISOString().split('T')[0]}
          />
          <button onClick={calculateAge}>Calculate</button>
        </div>
        <p id="result">{ageResult}</p>
      </div>
    </div>
  );
};

export default AgeCalculator;
