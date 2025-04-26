import {
  Container,
  HomeTitle,
  Logo,
  Logobox,
  Me,
  Media,
  MediaIcon,
  Signal,
} from "./style";

//import icons
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
//importar imagem
import logo from "../../assets/home/logo.png";

export default function Home() {
  return (
    <Container>
      <Logobox>
        <Logo>
          <img src={logo} />
        </Logo>
      </Logobox>
      <HomeTitle>Desenvolvedor Front-End Junior</HomeTitle>
      <Me>
        <Signal />
        <p>Juskowiak Afonso</p>
      </Me>
      <Media>
        <MediaIcon>
          <a href="#" target="_blank" title="Github">
            <FiGithub className="i" />
          </a>
        </MediaIcon>
        <MediaIcon>
          <a href="#" target="_blank" title="Linkedin">
            <CiLinkedin className="i" />
          </a>
        </MediaIcon>
        <MediaIcon>
          <a href="#" target="_blank" title="Youtube">
            <AiOutlineYoutube className="i" />
          </a>
        </MediaIcon>
      </Media>
    </Container>
  );
}
