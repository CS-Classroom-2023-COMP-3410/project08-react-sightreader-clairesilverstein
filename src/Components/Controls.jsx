import React from "react";

const Controls = ({ setAbcNotation }) => {
  const handleFileSelect = (event) => {
    const selectedFile = event.target.value;
    fetch(`/music/${selectedFile}`)
      .then((response) => response.text())
      .then((text) => setAbcNotation(text));
  };

  return (
    <div>
      <h2>Controls</h2>
      <label>Select ABC File:</label>
      <select onChange={handleFileSelect}>
        <option value="">---Custom ABC---</option>
        <option value="cecilio-lesson1-open-strings.abc">cecilio-lesson1-open-strings.abc</option>
            <option value="cecilio-lesson2-first-position.abc">cecilio-lesson2-first-position.abc</option>
            <option value="cecilio-lesson2-twinkle-twinkle-little-star.abc">cecilio-lesson2-twinkle-twinkle-little-star.abc</option>
            <option value="cecilio-lesson3-exercise-1.abc">cecilio-lesson3-exercise-1.abc</option>
            <option value="cecilio-lesson3-exercise-2.abc">cecilio-lesson3-exercise-2.abc</option>
            <option value="cecilio-lesson3-exercise-3.abc">cecilio-lesson3-exercise-3.abc</option>
            <option value="cecilio-lesson3-exercise-4.abc">cecilio-lesson3-exercise-4.abc</option>
            <option value="cecilio-lesson3-jingle-bells.abc">cecilio-lesson3-jingle-bells.abc</option>
            <option value="cecilio-lesson3-mary-had-a-little-lamb.abc">cecilio-lesson3-mary-had-a-little-lamb.abc</option>
            <option value="cecilio-lesson4-camptown-races.abc">cecilio-lesson4-camptown-races.abc</option>
            <option value="cecilio-lesson4-lightly-row.abc">cecilio-lesson4-lightly-row.abc</option>
            <option value="cecilio-lesson4-russian-dance-tune.abc">cecilio-lesson4-russian-dance-tune.abc</option>
            <option value="cecilio-lesson5-eighth-notes.abc">cecilio-lesson5-eighth-notes.abc</option>
            <option value="cecilio-lesson5-hungarian-folk-song-1.abc">cecilio-lesson5-hungarian-folk-song-1.abc</option>
            <option value="cecilio-lesson5-the-old-gray-goose.abc">cecilio-lesson5-the-old-gray-goose.abc</option>
            <option value="cecilio-lesson6-first-position-d-string.abc">cecilio-lesson6-first-position-d-string.abc</option>
            <option value="cecilio-lesson6-ode-to-joy.abc">cecilio-lesson6-ode-to-joy.abc</option>
            <option value="cecilio-lesson6-scherzando.abc">cecilio-lesson6-scherzando.abc</option>
            <option value="cecilio-lesson7-can-can.abc">cecilio-lesson7-can-can.abc</option>
            <option value="cecilio-lesson7-country-gardens.abc">cecilio-lesson7-country-gardens.abc</option>
            <option value="cecilio-lesson7-gavotte.abc">cecilio-lesson7-gavotte.abc</option>
            <option value="cecilio-lesson8-dixie.abc">cecilio-lesson8-dixie.abc</option>
            <option value="cecilio-lesson8-largo.abc">cecilio-lesson8-largo.abc</option>
            <option value="hot-cross-buns.abc">hot-cross-buns.abc</option>
            <option value="lesson1-open-string-exercise-1.abc">lesson1-open-string-exercise-1.abc</option>
            <option value="lesson1-open-string-exercise-2.abc">lesson1-open-string-exercise-2.abc</option>
            <option value="lesson1-open-string-exercise-3.abc">lesson1-open-string-exercise-3.abc</option>
            <option value="lesson1-open-string-exercise-4.abc">lesson1-open-string-exercise-4.abc</option>
            <option value="lesson1-open-string-exercise-5.abc">lesson1-open-string-exercise-5.abc</option>
            <option value="lesson1-open-string-exercise-6.abc">lesson1-open-string-exercise-6.abc</option>
            <option value="lesson2-1st-finger-exercise-1.abc">lesson2-1st-finger-exercise-1.abc</option>
            <option value="lesson2-1st-finger-exercise-2.abc">lesson2-1st-finger-exercise-2.abc</option>
            <option value="lesson2-1st-finger-exercise-3.abc">lesson2-1st-finger-exercise-3.abc</option>
            <option value="lesson2-1st-finger-exercise-4.abc">lesson2-1st-finger-exercise-4.abc</option>
            <option value="lesson2-1st-finger-exercise-5.abc">lesson2-1st-finger-exercise-5.abc</option>
            <option value="lesson2-1st-finger-exercise-6.abc">lesson2-1st-finger-exercise-6.abc</option>     
      </select>
    </div>
  );
};

export default Controls;
