import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import '../Components/QrCodeWithImage.css';

const QRCodeGenerator = () => {
  const [qrText, setQrText] = useState('');
  const [imageData, setImageData] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        resizeImage(reader.result); // Resize image and convert to base64
      };
      reader.readAsDataURL(file); // Read the file as a data URL (base64)
    }
  };

  const resizeImage = (base64Str) => {
    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const maxWidth = 300; // Set max width or height
      const scaleSize = maxWidth / img.width;
      canvas.width = maxWidth;
      canvas.height = img.height * scaleSize;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const resizedBase64 = canvas.toDataURL('image/jpeg', 0.7); // Resize and compress the image
      setImageData(resizedBase64);
    };
  };

  const generateQR = () => {
    if (imageData) {
      setQrText(imageData); // Set resized base64 string as QR code content
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
