import React from "react";
import { createRoot } from "react-dom/client"; // ahora se exige en React 18
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/**
 * Notar que ya no se invoca a la clase ReactDOM ni al metodo render
 * como tradicionalmente se hacía hasta la version 17.
 */
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
