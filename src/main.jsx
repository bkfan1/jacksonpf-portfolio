import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ColorModeScript, theme } from "@chakra-ui/react";
import './i18n';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
