import { Container, Logo, Menu, MenuCard } from "./style";
import { HashLink as Link } from "react-router-hash-link";
//importar pictures
import logo from "../../assets/home/logo.png";

export default function Navegador() {
  return (
    <Container>
      <Logo>
        <img src={logo} />
      </Logo>
      <Menu>
        <MenuCard>
          <Link to={"#home"}>Home </Link>
        </MenuCard>
        <MenuCard>
          <Link to={"#sobre"}>Sobre </Link>
        </MenuCard>
        <MenuCard>
          <Link to={"#projeto"}>Projetos </Link>
        </MenuCard>
      </Menu>
    </Container>
  );
}
