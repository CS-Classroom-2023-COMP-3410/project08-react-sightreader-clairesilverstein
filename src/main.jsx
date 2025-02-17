// Import necessary modules and styles
//import './sightreader.jsx';

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";

console.log("main.jsx is loaded!"); // Debugging log

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  console.log("Root element found:", rootElement);

  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Error: #root div not found in index.html!");
  }
});

