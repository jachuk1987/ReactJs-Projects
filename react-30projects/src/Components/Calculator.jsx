import React, { Component } from "react";
import "../App.css";

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: "",
        };
    }

    handleClick = (value) => {
        this.setState((prevState) => ({
            displayValue: prevState.displayValue + value,
        }));
    };

    handleClear = () => {
        this.setState({ displayValue: "" });
    };

    handleDelete = () => {
        this.setState((prevState) => ({
            displayValue: prevState.displayValue.slice(0, -1),
        }));
    };

    handleEqual = () => {
        try {
            this.setState((prevState) => ({
                displayValue: eval(prevState.displayValue).toString(),
            }));
        } catch (error) {
            this.setState({ displayValue: "Error" });
        }
    };

    render() {
        const { displayValue } = this.state;

        return (
            <div className="container6">
                <div className="calculator">
                    <form>
                        <div className="display">
                            <input type="text" value={displayValue} readOnly />
                        </div>
                        <div>
                            <input
                                type="button"
                                value="AC"
                                onClick={this.handleClear}
                                className="operator"
                            />
                            <input
                                type="button"
                                value="DE"
                                onClick={this.handleDelete}
                                className="operator"
                            />
                            <input
                                type="button"
                                value="."
                                onClick={() => this.handleClick(".")}
                                className="operator"
                            />
                            <input
                                type="button"
                                value="/"
                                onClick={() => this.handleClick("/")}
                                className="operator"
                            />
                        </div>
                        <div>
                            <input
                                type="button"
                                value="7"
                                onClick={() => this.handleClick("7")}
                            />
                            <input
                                type="button"
                                value="8"
                                onClick={() => this.handleClick("8")}
                            />
                            <input
                                type="button"
                                value="9"
                                onClick={() => this.handleClick("9")}
                            />
                            <input
                                type="button"
                                value="*"
                                onClick={() => this.handleClick("*")}
                                className="operator"
                            />
                        </div>
                        <div>
                            <input
                                type="button"
                                value="4"
                                onClick={() => this.handleClick("4")}
                            />
                            <input
                                type="button"
                                value="5"
                                onClick={() => this.handleClick("5")}
                            />
                            <input
                                type="button"
                                value="6"
                                onClick={() => this.handleClick("6")}
                            />
                            <input
                                type="button"
                                value="-"
                                onClick={() => this.handleClick("-")}
                                className="operator"
                            />
                        </div>
                        <div>
                            <input
                                type="button"
                                value="1"
                                onClick={() => this.handleClick("1")}
                            />
                            <input
                                type="button"
                                value="2"
                                onClick={() => this.handleClick("2")}
                            />
                            <input
                                type="button"
                                value="3"
                                onClick={() => this.handleClick("3")}
                            />
                            <input
                                type="button"
                                value="+"
                                onClick={() => this.handleClick("+")}
                                className="operator"
                            />
                        </div>
                        <div>
                            <input
                                type="button"
                                value="00"
                                onClick={() => this.handleClick("00")}
                            />
                            <input
                                type="button"
                                value="0"
                                onClick={() => this.handleClick("0")}
                            />
                            <input
                                type="button"
                                value="="
                                onClick={this.handleEqual}
                                className="equal operator"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
