import React, { Component } from "react";

export default class ToastNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: [],
    };
  }

  showToast = (msg, type) => {
    const toast = { id: Date.now(), msg, type };
    this.setState((prevState) => ({
      toasts: [...prevState.toasts, toast],
    }));

    setTimeout(() => {
      this.setState((prevState) => ({
        toasts: prevState.toasts.filter(
          (toastItem) => toastItem.id !== toast.id
        ),
      }));
    }, 6000);
  };

  render() {
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
        <i className="fa-solid fa-circle-exclamation"></i> Invalid input, check
        again
      </>
    );

    return (
      <div>
        <div className="buttons">
          <button onClick={() => this.showToast(succesMsg, "success")}>
            Success
          </button>
          <button onClick={() => this.showToast(errorMsg, "error")}>Error</button>
          <button onClick={() => this.showToast(invalidMsg, "invalid")}>
            Invalid
          </button>
        </div>
        <div id="toast-box">
          {this.state.toasts.map((toast) => (
            <div key={toast.id} className={`toast ${toast.type}`}>
              {toast.msg}
              <div className="progress-bar"></div>
            </div>
          ))}
        </div>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            background-color: #f7edff;
          }

          .buttons {
            margin: 50px;
          }

          .buttons button {
            background: #333;
            color: #fff;
            border: 0;
            outline: 0;
            width: 120px;
            height: 40px;
            margin: 5px;
            cursor: pointer;
          }

          #toast-box {
            position: absolute;
            bottom: 30px;
            right: 30px;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            overflow: hidden;
            padding: 20px;
          }

          .toast {
            width: 400px;
            height: 80px;
            background: #fff;
            font-weight: 500;
            margin: 15px 0;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            position: relative;
          }

          .toast i {
            margin: 0 20px;
            font-size: 35px;
          }

          .toast.success i {
            color: green;
          }

          .toast.error i {
            color: red;
          }

          .toast.invalid i {
            color: orange;
          }

          .progress-bar {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 5px;
            background: green;
            animation: anim 5s linear forwards;
          }

          .toast.error .progress-bar {
            background: red;
          }

          .toast.invalid .progress-bar {
            background: orange;
          }

          @keyframes anim {
            100% {
              width: 0;
            }
          }
        `}</style>
      </div>
    );
  }
}
