import React, { useState } from "react";
import "./PopUp.css";
import check_icon from "../assets/check-circle.svg"

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      <button type="submit" className="btn" onClick={openPopup}>
        Submit
      </button>
      <div className={`popup ${isOpen ? "open-popup" : ""}`} id="popup">
        <img src={check_icon} alt="Success" />
        <h2>Thank You</h2>
        <p>Your details have been successfully submitted. Thanks!!</p>
        <button type="button" onClick={closePopup}>
          OK
        </button>
      </div>
    </div>
  );
};

export default PopUp;
