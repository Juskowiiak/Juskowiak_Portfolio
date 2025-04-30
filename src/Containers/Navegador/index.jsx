import { Container, Logo, Menu, MenuCard, MenuTogle } from "./style";
import { HashLink as Link } from "react-router-hash-link";
//importar pictures
import logo from "../../assets/home/logo.png";
//importar icons
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";

export default function Navegador() {
  const [abrir, setAbrir] = useState(false);

  function abrirMenu() {
    setAbrir(!abrir);
  }
  function fecharMenu() {
    setAbrir(!abrir);
  }
  return (
    <Container>
      <Link to={"#home"}>
        <Logo>
          <img src={logo} />
        </Logo>
      </Link>

      <Menu className={abrir ? "abrir" : ""}>
        <MenuCard onClick={() => fecharMenu()}>
          <Link to={"#home"}>Home </Link>
        </MenuCard>
        <MenuCard onClick={() => fecharMenu()}>
          <Link to={"#about"}>Sobre </Link>
        </MenuCard>
        <MenuCard onClick={() => fecharMenu()}>
          <Link to={"#project"}>Projetos </Link>
        </MenuCard>
      </Menu>
      <MenuTogle onClick={() => abrirMenu()}>
        <RiMenu4Fill className="i" />
      </MenuTogle>
    </Container>
  );
}
