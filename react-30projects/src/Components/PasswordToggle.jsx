import React, { Component } from "react";
import "../App.css";
import close_icon from "../assets/eye-close.png";
import eye_icon from "../assets/eye-open.png";

class PasswordToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordVisible: false,
    };
  }

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      passwordVisible: !prevState.passwordVisible,
    }));
  };

  render() {
    const { passwordVisible } = this.state;

    return (
      <div className="input-box1">
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Password"
          id="password"
        />
        <img
          src={passwordVisible ? eye_icon : close_icon}
          alt="Toggle visibility"
          id="eyeicon"
          onClick={this.togglePasswordVisibility}
        />
      </div>
    );
  }
}

export default PasswordToggle;
