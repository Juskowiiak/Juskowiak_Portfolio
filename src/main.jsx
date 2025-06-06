import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Styleglobal from "./Style/styleglobal";
import Home from "./Containers/Home";
import Navegador from "./Containers/Navegador";
import Sobre from "./Containers/Sobre";
import { BrowserRouter } from "react-router-dom";
import Projeto from "./Containers/Projeto";
import Footer from "./Containers/Footer";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Styleglobal />
    <BrowserRouter>
      <Navegador />
      <Home />
      <Sobre />
      <Projeto />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
