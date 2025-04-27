import {
  Container,
  Info,
  Mensg,
  Opcoes,
  OpcoesCard,
  Painel,
  Tela,
  TelaCard,
} from "./style";
//import Api
import ListOpcao from "../../Api/Projeto_opcao.json";
import Laptops from "../../Api/Projetos.json";
//import media
import { GrProjects } from "react-icons/gr";
import { BsInfoCircle } from "react-icons/bs";
//importar components
import {
  Maintext1,
  Maintext2,
  TitleContainer,
} from "../../Components/mainTitle/style";
import { SubText, SubTitleContainer } from "../../Components/subTitle/style";
import { Divisor } from "../../Components/barra/style";
import { useState } from "react";

export default function Projeto() {
  //Filtrar projetos primeiros
  const [chave, setChave] = useState(Laptops);

  function recebeOpcao(tipo) {
    console.log(tipo);
    const novoMap = Laptops.filter((projeto) => projeto.tipo == tipo);
    setChave(novoMap);
  }
  return (
    <Container>
      <SubTitleContainer>
        <GrProjects className="icon" />
        <SubText>Front-End</SubText>
      </SubTitleContainer>
      <TitleContainer>
        <Maintext1>O que eu</Maintext1>
        <Maintext2>faço</Maintext2>
      </TitleContainer>
      <Info>
        <Opcoes>
          {ListOpcao.map((item, index) => (
            <OpcoesCard key={index} onClick={() => recebeOpcao(item.tipo)}>
              <p>{item.nome}</p>
            </OpcoesCard>
          ))}
        </Opcoes>
        <Painel>
          <Mensg>
            <BsInfoCircle className="i" />
            <p>texto</p>
          </Mensg>
          <Tela>
            {chave.map((projeto, index) => (
              <TelaCard key={index}>
                <div className="picture">
                  <img src={projeto.pic} />
                </div>
                <h3>{projeto.nome}</h3>
                <p title="Visualizar Projeto">Descrição</p>
              </TelaCard>
            ))}
          </Tela>
        </Painel>
      </Info>
      <Divisor />
    </Container>
  );
}
