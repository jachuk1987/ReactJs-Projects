import React, { Component } from 'react';

export default class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: '',
      minutes: '',
      seconds: '',
      date: '',
      month: '',
      year: ''
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  updateTime() {
    const currentTime = new Date();
    this.setState({
      hours: currentTime.getHours().toString().padStart(2, '0'),
      minutes: currentTime.getMinutes().toString().padStart(2, '0'),
      seconds: currentTime.getSeconds().toString().padStart(2, '0'),
      date: currentTime.getDate().toString().padStart(2, '0'),
      month: (currentTime.getMonth() + 1).toString().padStart(2, '0'), // Months are zero-indexed
      year: currentTime.getFullYear()
    });
  }

  render() {
    const { hours, minutes, seconds, date, month, year } = this.state;
    const styles = {
      timer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '50px',
        marginLeft: '450px',
        width: 'auto',
      },
      timerDiv: {
        width: '100px',
        fontSize: 'xx-large',
      },
      title: {
        textAlign: 'center',
        color: 'red',
      },
      label: {
        marginRight: '20px',
        color: 'red',
      }
    };

    return (
      <div>
        <u style={{ color: 'green' }}>
          <h1 id="title" style={styles.title}>DATE AND TIME</h1>
        </u>

        <div className="timer" style={styles.timer}>
          <div style={styles.label}><h3>Date:</h3></div>
          <div id="box4" style={styles.timerDiv}>
            <h2 id="date">{date}.</h2>
          </div>
          <div id="box5" style={styles.timerDiv}>
            <h2 id="mon">{month}.</h2>
          </div>
          <div id="box6" style={styles.timerDiv}>
            <h2 id="year">{year}</h2>
          </div>
        </div>

        <div className="timer" style={styles.timer}>
          <div style={styles.label}><h3>Time:</h3></div>
          <div id="box1" style={styles.timerDiv}>
            <h2 id="hrs">{hours}:</h2>
          </div>
          <div id="box2" style={styles.timerDiv}>
            <h2 id="min">{minutes}:</h2>
          </div>
          <div id="box3" style={styles.timerDiv}>
            <h2 id="sec">{seconds}</h2>
          </div>
        </div>
      </div>
    );
  }
}
