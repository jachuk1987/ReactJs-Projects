import React, { useState } from 'react';
import './QRCodeGenerator.css';

const QRCodeGenerator = () => {
  const [qrText, setQrText] = useState('');
  const [qrImageUrl, setQrImageUrl] = useState('');
  const [error, setError] = useState(false);

  const generateQR = () => {
    if (qrText.length > 0) {
      setQrImageUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
    }
  };

  return (
    <div className="container">
      <p>Enter your text or URL</p>
      <input
        type="text"
        placeholder="Text or URL"
        value={qrText}
        onChange={(e) => setQrText(e.target.value)}
        className={error ? 'error' : ''}
      />
      <div id="imgBox" className={qrImageUrl ? 'show-img' : ''}>
        {qrImageUrl && <img src={qrImageUrl} alt="QR Code" id="qrImage" />}
      </div>
      <button onClick={generateQR}>Generate QR Code</button>
    </div>
  );
};

export default QRCodeGenerator;
