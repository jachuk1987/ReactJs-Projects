import React, { useState, useRef } from "react";
import "./StopWatch.css";
import app_icon from "../assets/app.svg";
import arrow_icon from "../assets/arrow-clockwise.svg";
import play_icon from "../assets/play-circle (1).svg";

const StopWatch = () => {
  const [time, setTime] = useState({ seconds: 0, minutes: 0, hours: 0 });
  const timerRef = useRef(null);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  const startStopwatch = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setTime((prevTime) => {
        let { seconds, minutes, hours } = prevTime;

        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
        }

        return { seconds, minutes, hours };
      });
    }, 1000);
  };

  const stopStopwatch = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetStopwatch = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTime({ seconds: 0, minutes: 0, hours: 0 });
  };

  return (
    <div className="Stopwatch">
      <h1>
        {formatTime(time.hours)}:{formatTime(time.minutes)}:
        {formatTime(time.seconds)}
      </h1>
      <div className="button">
        <img src={app_icon} alt="Stop" onClick={stopStopwatch} />
        <img src={play_icon} alt="Start" onClick={startStopwatch} />
        <img src={arrow_icon} alt="Reset" onClick={resetStopwatch} />
      </div>
    </div>
  );
};

export default StopWatch;
