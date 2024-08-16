import React, { Component } from "react";
import "../App.css";

export default class ToastNotification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toasts: []
        };
    }

    showToast = (msg, type) => {
        const toast = { id: Date.now(), msg, type };
        this.setState((prevState) => ({
            toasts: [...prevState.toasts, toast]
        }));

        setTimeout(() => {
            this.setState((prevState) => ({
                toasts: prevState.toasts.filter((toastItem) => toastItem.id !== toast.id)
            }));
        }, 6000);
    };

    render() {
        const { toasts } = this.state;

        const succesMsg = (
            <>
                <i className="fa-solid fa-circle-check"></i> Successfully submitted
            </>
        );
        const errorMsg = (
            <>
                <i className="fa-solid fa-circle-xmark"></i> Please fix the error!
            </>
        );
        const invalidMsg = (
            <>
                <i className="fa-solid fa-circle-exclamation"></i> Invalid input, check again
            </>
        );

        return (
            <div>
                <div className="buttons1">
                    <button onClick={() => this.showToast(succesMsg, "success")}>Success</button>
                    <button onClick={() => this.showToast(errorMsg, "error")}>Error</button>
                    <button onClick={() => this.showToast(invalidMsg, "invalid")}>Invalid</button>
                </div>
                <div id="toast-box">
                    {toasts.map((toast) => (
                        <div
                            key={toast.id}
                            className={`toast ${toast.type}`}
                        >
                            {toast.msg}
                            <div className="progress-bar"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};
