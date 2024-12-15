import { HashRouter } from "react-router-dom"; // Import HashRouter
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <HashRouter basename="/Portfolio"> {/* If your app is deployed under /Portfolio */}
    <App />
  </HashRouter>,
  document.getElementById("root")
);
