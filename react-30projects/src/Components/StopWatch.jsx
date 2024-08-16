import React, { Component } from "react";
import "../App.css";
import app_icon from "../assets/app.svg";
import arrow_icon from "../assets/arrow-clockwise.svg";
import play_icon from "../assets/play-circle (1).svg";

export default class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
    };
    this.timerRef = null;
  }

  formatTime = (value) => (value < 10 ? `0${value}` : value);

  startStopwatch = () => {
    if (this.timerRef !== null) {
      clearInterval(this.timerRef);
    }
    this.timerRef = setInterval(() => {
      this.setState((prevState) => {
        let { seconds, minutes, hours } = prevState;

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

  stopStopwatch = () => {
    clearInterval(this.timerRef);
    this.timerRef = null;
  };

  resetStopwatch = () => {
    clearInterval(this.timerRef);
    this.timerRef = null;
    this.setState({ seconds: 0, minutes: 0, hours: 0 });
  };

  componentWillUnmount() {
    clearInterval(this.timerRef);
  }

  render() {
    const { seconds, minutes, hours } = this.state;

    return (
      <div className="Stopwatch">
        <h1>
          {this.formatTime(hours)}:{this.formatTime(minutes)}:
          {this.formatTime(seconds)}
        </h1>
        <div className="button2">
          <img src={app_icon} alt="Stop" onClick={this.stopStopwatch} />
          <img src={play_icon} alt="Start" onClick={this.startStopwatch} />
          <img src={arrow_icon} alt="Reset" onClick={this.resetStopwatch} />
        </div>
      </div>
    );
  }
}
