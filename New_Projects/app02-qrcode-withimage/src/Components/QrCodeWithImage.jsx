import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import '../Components/QrCodeWithImage.css';

// Import local images
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

const QRCodeGenerator = () => {
  const [qrText, setQrText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const generateQR = () => {
    if (qrText.length > 0) {
      // QR code generation logic
    } else {
      alert('Please enter text or URL');
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
      />
      <div id="imgBox">
        <div style={{ position: 'relative', display: 'inline-block', marginTop: '20px' }}>
          <QRCode
            value={qrText || " "}
            size={256}
            includeMargin={true}
            renderAs="svg"
            level="H"
          />
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Overlay"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
              }}
            />
          )}
        </div>
      </div>
      <button onClick={generateQR}>Generate QR Code</button>

      <div style={{ marginTop: '20px' }}>
        <p>Select a local image to overlay:</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <img
            src={image1}
            alt="Image 1"
            className="selectable-image"
            onClick={() => setSelectedImage(image1)}
          />
          <img
            src={image2}
            alt="Image 2"
            className="selectable-image"
            onClick={() => setSelectedImage(image2)}
          />
          <img
            src={image3}
            alt="Image 3"
            className="selectable-image"
            onClick={() => setSelectedImage(image3)}
          />
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
