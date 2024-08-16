import React, { Component } from 'react';

export default class WebsiteComingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  }

  componentDidMount() {
    this.countDownDate = new Date("Jul 30, 2024 00:00:00").getTime();
    this.interval = setInterval(() => this.updateCountdown(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.countDownDate - now;

    if (distance < 0) {
      clearInterval(this.interval);
      this.setState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      });
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    }
  }

  render() {
    return (
      <div>
        <div style={{ marginRight: '20px', color: 'green', textAlign: 'center' }}>
          <h2> CountDownDate</h2>
        </div>
        <div id="main" style={styles.main}>
          <div className="web" style={{ ...styles.web, backgroundColor: 'rgb(191, 191, 209)', color: 'rgb(19, 17, 17)' }}>
            <span>Days</span>
            <h1 id="days">{this.state.days}</h1>
          </div>
          <div className="web" style={{ ...styles.web, backgroundColor: 'black', color: 'white' }}>
            <span>Hours</span>
            <h1 id="hours">{this.state.hours} :</h1>
          </div>
          <div className="web" style={{ ...styles.web, backgroundColor: 'black', color: 'white' }}>
            <span>Minutes</span>
            <h1 id="minutes">{this.state.minutes} :</h1>
          </div>
          <div className="web" style={{ ...styles.web, backgroundColor: 'black', color: 'white' }}>
            <span>Seconds</span>
            <h1 id="seconds">{this.state.seconds}</h1>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  main: {
    border: '2px solid black',
    padding: '20px',
    marginLeft: '480px',
    marginTop: '50px',
    width: '250px',
    backgroundColor: 'aliceblue',
    display: 'flex',
  },
  web: {
    width: '60px',
    height: 'auto',
    padding: '5px',
  },
};
