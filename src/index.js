import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App maxRating={10} />
    <App maxRating={3} />
    <App maxRating={6} />
  </StrictMode>
);
