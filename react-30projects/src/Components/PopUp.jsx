import React, { Component } from "react";
import "../App.css";
import check_icon from "../assets/check-circle.svg";

class PopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  openPopup = () => {
    this.setState({ isOpen: true });
  };

  closePopup = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className="container7">
        <button type="submit" className="btn" onClick={this.openPopup}>
          Submit
        </button>
        <div className={`popup ${isOpen ? "open-popup" : ""}`} id="popup">
          <img src={check_icon} alt="Success" />
          <h2>Thank You</h2>
          <p>Your details have been successfully submitted. Thanks!!</p>
          <button type="button" onClick={this.closePopup}>
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default PopUp;