import React, { Component } from 'react';
import '../App.css';

export default class AgeCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            birthDate: '',
            ageResult: '',
        };
    }

    calculateAge = () => {
        const { birthDate } = this.state;

        if (!birthDate) {
            this.setState({ ageResult: 'Please select your birth date.' });
            return;
        }

        const birth = new Date(birthDate);
        const today = new Date();

        let years = today.getFullYear() - birth.getFullYear();
        let months = today.getMonth() - birth.getMonth();
        let days = today.getDate() - birth.getDate();

        if (days < 0) {
            months--;
            days += this.getDaysInMonth(birth.getFullYear(), birth.getMonth());
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        this.setState({
            ageResult: `You are ${years} years, ${months} months, and ${days} days old.`,
        });
    };

    getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    handleDateChange = (e) => {
        this.setState({ birthDate: e.target.value });
    };

    render() {
        const { birthDate, ageResult } = this.state;

        return (
            <div className="container3">
                <div className="calculator">
                    <h1>
                        JavaScript <br /> <span>Age Calculator</span>
                    </h1>
                    <div className="input-box">
                        <input
                            type="date"
                            value={birthDate}
                            onChange={this.handleDateChange}
                            max={new Date().toISOString().split('T')[0]}
                        />
                        <button onClick={this.calculateAge}>Calculate</button>
                    </div>
                    <p id="result">{ageResult}</p>
                </div>
            </div>
        );
    }
}


