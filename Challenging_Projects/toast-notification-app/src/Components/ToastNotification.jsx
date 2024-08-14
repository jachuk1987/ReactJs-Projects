import React, { useState } from "react";
import "./ToastNotification.css"; // You can add the CSS in a separate file or use inline styles

const ToastNotification = () => {
    const [toasts, setToasts] = useState([]);

    const showToast = (msg, type) => {
        const toast = { id: Date.now(), msg, type };
        setToasts((prevToasts) => [...prevToasts, toast]);

        setTimeout(() => {
            setToasts((prevToasts) =>
                prevToasts.filter((toastItem) => toastItem.id !== toast.id)
            );
        }, 6000);
    };

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
            <div className="buttons">
                <button onClick={() => showToast(succesMsg, "success")}>Success</button>
                <button onClick={() => showToast(errorMsg, "error")}>Error</button>
                <button onClick={() => showToast(invalidMsg, "invalid")}>Invalid</button>
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
};

export default ToastNotification;
