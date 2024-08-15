import React, { Component } from 'react';

export default class SimpleCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            day: '',
            year: '',
            month: '',
        };
    }

    componentDidMount() {
        this.updateDate();
        this.interval = setInterval(this.updateDate, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updateDate = () => {
        const currentTime = new Date();
        const dayNames = ["", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        this.setState({
            date: currentTime.getDate(),
            day: dayNames[currentTime.getDay()],
            year: currentTime.getFullYear(),
            month: monthNames[currentTime.getMonth()],
        });
    };

    render() {
        const { date, day, year, month } = this.state;

        return (
            <div>
                <u style={{ color: 'green' }}>
                    <h1 style={{ color: 'rgb(0, 76, 255)', textAlign: 'center' }} id="title">Simple Calendar</h1>
                </u>

                <div id="c1" style={styles.c1}>
                    <div id="c2" style={styles.c2}>
                        <h2 id="date" style={{ textAlign: 'center' }}>{date}</h2>
                        <h2 id="days">{day}</h2>
                    </div>
                    <div id="c3" style={styles.c3}>
                        <h2 id="year" style={{ textAlign: 'center' }}>{year}</h2>
                        <h2 id="yearname">{month}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    c1: {
        marginLeft: '450px',
        marginTop: '150px',
        border: '2px solid black',
        display: 'flex',
    },
    c2: {
        padding: '10px',
        backgroundColor: 'black',
        color: 'white',
    },
    c3: {
        padding: '10px',
        backgroundColor: 'white',
        color: 'black',
    },
};
