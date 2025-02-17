import React, { useState } from "react";
import Tools from "./Components/Tools";
import ABCPlayer from "./Components/ABCPlayer";
import Controls from "./Components/Controls";
import PitchDetector from "./Components/PitchDetector";

const App = () => {
  const [abcNotation, setAbcNotation] = useState("");

  return (
    <div className="container">
      <h1 className="text-center">ABC Sightreader</h1>
      <Tools setAbcNotation={setAbcNotation} />
      <Controls setAbcNotation={setAbcNotation} />
      <ABCPlayer abcNotation={abcNotation} />
      <PitchDetector />
    </div>
  );
};

export default App;
