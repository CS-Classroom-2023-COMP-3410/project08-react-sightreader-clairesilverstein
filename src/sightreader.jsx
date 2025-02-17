import React, { useState } from "react";
import ABCPlayer from "./Components/ABCPlayer";
import PitchDetector from "./Components/PitchDetector";

const SightReader = () => {
  const [abcNotation, setAbcNotation] = useState("");

  const handleFileSelect = (event) => {
    const selectedFile = event.target.value;
    fetch(`/music/${selectedFile}`)
      .then((response) => response.text())
      .then((text) => setAbcNotation(text));
  };

  return (
    <div>
      <h2>Select an ABC File</h2>
      <select onChange={handleFileSelect}>
        <option value="">---Custom ABC---</option>
        <option value="test.abc">Test Tune</option>
      </select>
      <ABCPlayer abcNotation={abcNotation} />
      <PitchDetector />
    </div>
  );
};

export default SightReader;
