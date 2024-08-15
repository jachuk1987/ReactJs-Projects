import React, { Component } from "react";
import '../App.css';

class GeneratePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      length: 12,
      includeNumbers: true,
      includeSymbols: true,
    };
  }

  generatePassword = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characters = alphabet;
    if (this.state.includeNumbers) characters += numbers;
    if (this.state.includeSymbols) characters += symbols;

    let generatedPassword = "";
    for (let i = 0; i < this.state.length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    this.setState({ password: generatedPassword });
  };

  handleLengthChange = (e) => {
    this.setState({ length: e.target.value });
  };

  handleIncludeNumbersChange = (e) => {
    this.setState({ includeNumbers: e.target.checked });
  };

  handleIncludeSymbolsChange = (e) => {
    this.setState({ includeSymbols: e.target.checked });
  };

  render() {
    const { password, length, includeNumbers, includeSymbols } = this.state;

    return (
      <div className="container">
        <h1>Password Generator</h1>
        <div>
          <label>Password Length:</label>
          <input
            type="number"
            value={length}
            onChange={this.handleLengthChange}
            min="4"
            max="64"
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={this.handleIncludeNumbersChange}
            />
            Include Numbers
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={this.handleIncludeSymbolsChange}
            />
            Include Symbols
          </label>
        </div>
        <button onClick={this.generatePassword}>Generate Password</button>
        {password && (
          <div className="generated-password">
            <h3>Generated Password:</h3>
            <p>{password}</p>
          </div>
        )}
      </div>
    );
  }
}

export default GeneratePassword;
