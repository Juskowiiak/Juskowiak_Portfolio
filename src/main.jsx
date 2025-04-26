import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Styleglobal from "./Style/styleglobal";
import Home from "./Containers/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Styleglobal />
    <Home />
  </StrictMode>
);
