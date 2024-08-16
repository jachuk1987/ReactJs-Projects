import React, { Component } from 'react';
import '../App.css';

export default class QRCodeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qrText: '',
            qrImageUrl: '',
            error: false
        };
    }

    generateQR = () => {
        const { qrText } = this.state;
        if (qrText.length > 0) {
            this.setState({
                qrImageUrl: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`,
                error: false
            });
        } else {
            this.setState({ error: true });
            setTimeout(() => {
                this.setState({ error: false });
            }, 1000);
        }
    };

    handleInputChange = (e) => {
        this.setState({ qrText: e.target.value });
    };

    render() {
        const { qrText, qrImageUrl, error } = this.state;

        return (
            <div className="container4">
                <p>Enter your text or URL</p>
                <input
                    type="text"
                    placeholder="Text or URL"
                    value={qrText}
                    onChange={this.handleInputChange}
                    className={error ? 'error' : ''}
                />
                <div id="imgBox" className={qrImageUrl ? 'show-img' : ''}>
                    {qrImageUrl && <img src={qrImageUrl} alt="QR Code" id="qrImage" />}
                </div>
                <button onClick={this.generateQR}>Generate QR Code</button>
            </div>
        );
    }
};
