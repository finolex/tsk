//@ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// import { AuthProvider } from "./lib.jsx";
//ts-ignore
import {AuthProvider} from "basictech-react";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      (registration) => {
        console.log('SW registered: ', registration);
      },
      (registrationError) => {
        console.log('SW registration failed: ', registrationError);
      }
    );
  });
}


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
