import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Colours sourced from https://deezerbrand.com/document/37#/-/colour
const deezerTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#A238FF",
    },
    secondary: {
      main: "#96F9F3",
    },
    warning: {
      main: "#FF673D",
    },
    info: {
      main: "#FCFF60",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={deezerTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
