import React, { useEffect, useState } from "react";

const PitchDetector = () => {
  const [pitch, setPitch] = useState(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);
      microphone.connect(analyser);
      
      const detectPitch = () => {
        setPitch(Math.random() * 1000); // Placeholder logic
      };
      setInterval(detectPitch, 500);
    });
  }, []);

  return (
    <div>
      <h2>Pitch Detector</h2>
      <p>Detected Pitch: {pitch ? pitch.toFixed(2) + " Hz" : "No pitch detected"}</p>
    </div>
  );
};

export default PitchDetector;
