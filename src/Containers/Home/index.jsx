import {
  Barra,
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
//importar media
import logo from "../../assets/home/logo.png";
import MainVideo from "../../Components/video";
import { Divisor } from "../../Components/barra/style";

export default function Home() {
  return (
    <Container id="home">
      <Logobox>
        <Logo>
          <img src={logo} title="Juskowiak-Afonso" />
        </Logo>
      </Logobox>
      <HomeTitle>Desenvolvedor Front-End Junior</HomeTitle>
      <Me>
        <Signal />
        <p>Juskowiak Afonso</p>
      </Me>
      <Media>
        <MediaIcon>
          <a
            href="https://github.com/Juskowiiak"
            target="_blank"
            title="Github"
          >
            <FiGithub className="i" />
          </a>
        </MediaIcon>
        <MediaIcon>
          <a
            href="https://www.linkedin.com/in/juskowiak-afonso-36a0b6201/"
            target="_blank"
            title="Linkedin"
          >
            <CiLinkedin className="i" />
          </a>
        </MediaIcon>
        <MediaIcon>
          <a
            href="https://www.youtube.com/@AfonsoTips"
            target="_blank"
            title="Youtube"
          >
            <AiOutlineYoutube className="i" />
          </a>
        </MediaIcon>
      </Media>
      <MainVideo />
      <Barra />
    </Container>
  );
}
