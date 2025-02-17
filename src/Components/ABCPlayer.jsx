import React, { useEffect, useRef } from "react";

const ABCPlayer = ({ abcNotation }) => {
  const notationRef = useRef(null);

  useEffect(() => {
    if (window.ABCJS && abcNotation && notationRef.current) {
      window.ABCJS.renderAbc(notationRef.current, abcNotation, {});
    }
  }, [abcNotation]);

  return (
    <div>
      <h3>ABC Notation</h3>
      <div ref={notationRef} style={{ minHeight: "100px" }}></div>
    </div>
  );
};

export default ABCPlayer;
