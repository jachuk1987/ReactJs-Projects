import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import '../Components/QrCodeWithImage.css';

const QRCodeGenerator = () => {
  const [imageURL, setImageURL] = useState('');
  const [qrText, setQrText] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const simulatedURL = URL.createObjectURL(file);
      setImageURL(simulatedURL);
    }
  };

  const generateQR = () => {
    if (imageURL) {
      setQrText(imageURL);
    } else {
      alert('Please upload an image');
    }
  };

  return (
    <div className="container">
      <p>Upload an image to generate its QR code</p>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <button onClick={generateQR}>Generate QR Code</button>

      {qrText && (
        <div id="imgBox" style={{ marginTop: '20px' }}>
          <QRCodeSVG
            value={qrText}
            size={256}
            includeMargin={true}
            level="H"
          />
        </div>
      )};
    </div>
  );
};

export default QRCodeGenerator;
