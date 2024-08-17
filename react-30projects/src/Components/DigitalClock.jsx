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
      year: '',
      ampm: '',
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
    let hours = currentTime.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour time to 12-hour time
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'

    this.setState({
      hours: hours.toString().padStart(2, '0'),
      minutes: currentTime.getMinutes().toString().padStart(2, '0'),
      seconds: currentTime.getSeconds().toString().padStart(2, '0'),
      date: currentTime.getDate().toString().padStart(2, '0'),
      month: (currentTime.getMonth() + 1).toString().padStart(2, '0'), // Months are zero-indexed
      year: currentTime.getFullYear(),
      ampm: ampm,
    });
  }

  render() {
    const { hours, minutes, seconds, date, month, year, ampm } = this.state;
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
          <div id="box4" style={styles.timerDiv}>
            <h2 id="ampm">{ampm}</h2>
          </div>
        </div>
      </div>
    );
  }
}
