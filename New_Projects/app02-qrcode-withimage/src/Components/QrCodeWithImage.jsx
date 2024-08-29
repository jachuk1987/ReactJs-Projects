import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import '../Components/QrCodeWithImage.css';

const QRCodeGenerator = () => {
  const [imageURL, setImageURL] = useState('');
  const [qrText, setQrText] = useState('');

  // Simulate image upload and get URL
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Here, you'd normally upload the file to a server and get the URL
      // For this example, we'll simulate a URL creation
      const simulatedURL = URL.createObjectURL(file); // Replace with your image hosting service URL
      setImageURL(simulatedURL);
    }
  };

  const generateQR = () => {
    if (imageURL) {
      setQrText(imageURL); // Use the URL as the QR code content
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
      )}
    </div>
  );
};

export default QRCodeGenerator;
