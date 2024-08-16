import React, { Component } from 'react';
import './ProgressBar.css';

export default class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(prevState => {
                if (prevState.counter >= 65) {
                    clearInterval(this.intervalId);
                    return { counter: 65 };
                } else {
                    return { counter: prevState.counter + 1 };
                }
            });
        }, 30);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { counter } = this.state;

        return (
            <div className="skill">
                <div className="outer">
                    <div className="inner">
                        <div id="number">
                            {counter}%
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#e91e63" />
                            <stop offset="100%" stopColor="#673ab7" />
                        </linearGradient>
                    </defs>
                    <circle 
                        cx="80" 
                        cy="80" 
                        r="70" 
                        strokeLinecap="round" 
                        style={{ strokeDashoffset: 472 - (counter / 100) * 472 }} 
                    />
                </svg>
            </div>
        );
    }
}
