import React, { Component } from "react";
import "../App.css";

export default class PasswordStrength extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      strength: "",
    };
  }

  checkPasswordStrength = (password) => {
    let strengthValue = 0;

    if (password.length >= 8) {
      strengthValue += 1;
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasUppercase) strengthValue += 1;
    if (hasLowercase) strengthValue += 1;
    if (hasNumber) strengthValue += 1;
    if (hasSpecialChar) strengthValue += 1;

    if (strengthValue <= 2) {
      this.setState({ strength: "Weak" });
    } else if (strengthValue === 3) {
      this.setState({ strength: "Medium" });
    } else if (strengthValue >= 4) {
      this.setState({ strength: "Strong" });
    }
  };

  handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    this.setState({ password: newPassword });
    this.checkPasswordStrength(newPassword);
  };

  render() {
    const { password, strength } = this.state;

    return (
      <div style={{ marginLeft: "400px", marginTop: "50px", width: "500px", height: "auto" }}>
        <div style={{ marginRight: "20px", color: "green", textAlign: "center" }}>
          <h2>Password Strength Testing</h2>
        </div>
        <div>
          <label htmlFor="password">Enter your password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <div id="strengthIndicator" className={`strength ${strength.toLowerCase()}`}>
          Strength: {strength}
        </div>
      </div>
    );
  }
}


