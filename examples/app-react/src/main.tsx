import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import "./index.css";
import { initialize } from "@door-knob/core";

initialize();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
