import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; //mount app inside div id="root"(index.html)
import "./index.css"; //global CSS - layout
import App from "./App.jsx"; //main react component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
