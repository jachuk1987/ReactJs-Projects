import React, { useState, useEffect } from 'react';
import './App.css';

const QRCodeGenerator = () => {
  const [qrText, setQrText] = useState('');
  const [qrImageSrc, setQrImageSrc] = useState('');

  useEffect(() => {
    if (qrText.length > 0) {
      setQrImageSrc(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`);
    } else {
      setQrImageSrc('');
    }
  }, [qrText]); // This effect runs every time qrText changes

  return (
    <div className="container">
      <p>Enter your text or URL</p>
      <input
        type="text"
        placeholder="Text or URL"
        value={qrText}
        onChange={(e) => setQrText(e.target.value)}
      />
      <div id="imgBox" className={qrImageSrc ? 'show-img' : ''}>
        {qrImageSrc && <img src={qrImageSrc} alt="QR Code" id="qrImage" />}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
