import React, { useState } from "react";
import "./PasswordGenerator.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characters = alphabet;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div>
        <label>Password Length:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          min="4"
          max="64"
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
          Include Numbers
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
          />
          Include Symbols
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      {password && (
        <div className="generated-password">
          <h3>Generated Password:</h3>
          <p>{password}</p>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
