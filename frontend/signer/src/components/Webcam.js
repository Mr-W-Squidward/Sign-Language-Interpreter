import React, { useState, useRef } from 'react';

function WebcamAccess() {
  const [webcamStream, setWebcamStream] = useState(null);
  const videoRef = useRef(null);

  const requestWebcamAccess = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          setWebcamStream(stream);
          if (videoRef.current) {
            videoRef.current.srcObject = stream; 
          }
        })
        .catch(error => {
          console.error('Error accessing webcam:', error);
        });
    } else {
      console.error('getUserMedia not supported in this browser');
    }
  };

  return (
    <div>
      <h1>Demo</h1>
      <button onClick={requestWebcamAccess}>Request Webcam Access</button>
      {webcamStream && (
        <div>
          <h2>Webcam Stream</h2>
          <video autoPlay ref={videoRef}></video>
        </div>
      )}
    </div>
  );
}

export default WebcamAccess;
