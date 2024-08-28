import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { useDropzone } from 'react-dropzone';

const QrCodeWithImage = () => {
  const [qrValue, setQrValue] = useState('https://example.com');
  const [uploadedImage, setUploadedImage] = useState(null);

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
    <div>
      <h1>QR Code Generator with Image</h1>
      <input
        type="text"
        value={qrValue}
        onChange={(e) => setQrValue(e.target.value)}
        placeholder="Enter text or URL"
      />
      <div style={{ position: 'relative', display: 'inline-block', marginTop: '20px' }}>
        <QRCode
          value={qrValue}
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

export default QrCodeWithImage;
