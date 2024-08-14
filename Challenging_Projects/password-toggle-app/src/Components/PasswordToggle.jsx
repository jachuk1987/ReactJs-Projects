import React, { useState } from "react";
import "./PasswordToggle.css";
import close_icon from "../assets/eye-close.png";
import eye_icon from "../assets/eye-open.png";

const PasswordToggle = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="input-box">
      <input
        type={passwordVisible ? "text" : "password"}
        placeholder="Password"
        id="password"
      />
      <img
        src={passwordVisible ? eye_icon : close_icon}
        alt="Toggle visibility"
        id="eyeicon"
        onClick={togglePasswordVisibility}
      />
    </div>
  );
};

export default PasswordToggle;
