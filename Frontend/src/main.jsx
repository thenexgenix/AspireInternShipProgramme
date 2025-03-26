import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Routes/Router";
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <StrictMode>
      <Router />
    </StrictMode>
  </HelmetProvider>
);
