import {
  Container,
  Info,
  Picture,
  Text,
  Photo,
  About,
  Skill,
  SkillCard,
} from "./style";
//import media
import foto from "../../assets/sobre/me.gif";
import { FaUser } from "react-icons/fa";
//import Api
import mySkills from "../../Api/Skills.json";
//importar components
import {
  Maintext1,
  Maintext2,
  TitleContainer,
} from "../../Components/mainTitle/style";
import { SubText, SubTitleContainer } from "../../Components/subTitle/style";
import { Divisor } from "../../Components/barra/style";

export default function Sobre() {
  return (
    <Container id="about">
      <SubTitleContainer>
        <FaUser className="icon" />
        <SubText>Introdução</SubText>
      </SubTitleContainer>
      <TitleContainer>
        <Maintext1>Um pouco sobre</Maintext1>
        <Maintext2>mim</Maintext2>
      </TitleContainer>
      <Info>
        <Picture>
          <Photo>
            <img src={foto} />
          </Photo>
          <div className="available">
            <div className="signal"></div>
            <p>Available for work</p>
          </div>
        </Picture>
        <Text>
          <About>
            <p>
              Boas, tratam-me por Afonso, sou apenas +1 um dev apaixonado pela
              programação, alguém que tira proveito da sua criatividade para
              criar projetos incriveis.
            </p>
            <p>
              Um pouco curioso, busco sempre em aprender mais sobre as novas
              tecnologias, com o intuito de aprimorar ainda mais as minhas
              capacidades.
            </p>
          </About>

          <Skill>
            {mySkills.map((item, index) => (
              <SkillCard key={index} title={item.nome}>
                <img src={item.pic} />
              </SkillCard>
            ))}
          </Skill>
        </Text>
      </Info>
      <Divisor />
    </Container>
  );
}
