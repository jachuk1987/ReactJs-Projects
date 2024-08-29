import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { useDropzone } from 'react-dropzone';
import './App.css';

const QRCodeGenerator = () => {
  const [qrText, setQrText] = useState('');
  const [qrImageSrc, setQrImageSrc] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);

  const generateQR = () => {
    if (qrText.length > 0) {
      setQrImageSrc(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`);
    } else {
      alert('Please enter text or URL');
    }
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

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
        <div style={{ position: 'relative', display: 'inline-block', marginTop: '20px' }}>
          <QRCode
            value={qrText || " "}
            size={256}
            includeMargin={true}
            renderAs="svg"
            level="H" // High error correction level to ensure readability even with the image overlay
          />
          {uploadedImage && (
            <img
              src={uploadedImage}
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
      <div
        {...getRootProps()}
        style={{
          marginTop: '20px',
          border: '1px dashed #ccc',
          padding: '10px',
          cursor: 'pointer',
          maxWidth: '256px',
        }}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop an image here, or click to select an image</p>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
