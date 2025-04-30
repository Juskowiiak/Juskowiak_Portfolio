import {
  Container,
  Info,
  Opcoes,
  OpcoesCard,
  Painel,
  Tela,
  TelaCard,
  TelaCardInfo,
  TelaCardInfoContainer,
  TelaCardInfoContainerInfo,
  TelaCardInfoContainerPicture,
} from "./style";
//import Api
import ListOpcao from "../../Api/Projeto_opcao.json";
import Laptops from "../../Api/Projetos.json";
//import media
import { GrProjects } from "react-icons/gr";
//importar components
import {
  Maintext1,
  Maintext2,
  TitleContainer,
} from "../../Components/mainTitle/style";
import { SubText, SubTitleContainer } from "../../Components/subTitle/style";
import { Divisor } from "../../Components/barra/style";
import { useState } from "react";
//importar Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
//import icons
import { IoClose } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa";
import gear from "../../assets/media/gear.gif";
import {
  Data,
  Descricao,
  Linguagem,
  LinguagemCard,
  ProjLink,
  ProjText,
  Status,
  Titulo,
  Web,
} from "../../Components/cardInfo/style";

export default function Projeto() {
  //mapear todos os projetos, filtrar objeto selecionado
  const [projetos, setProjetos] = useState(Laptops);
  const [selecionado, setSelecionado] = useState(Laptops);
  //fechar/abrir card
  const [cardInfo, setCardInfo] = useState(false);
  //cor cubo status

  //trocar categoria pratica/projeto/trabalho
  function recebeOpcao(tipo) {
    const novoMap = Laptops.filter((projeto) => projeto.tipo == tipo);
    setProjetos(novoMap);
  }
  //abrir descriçao
  function lerDescricao(projeto) {
    const procura = Laptops.filter((item) => item.id == projeto);
    setSelecionado(procura);
    if (!cardInfo) {
      setCardInfo(!cardInfo);
    }
  }
  function fecharCard() {
    if (cardInfo) {
      setCardInfo(!cardInfo);
    }
  }
  return (
    <Container>
      <SubTitleContainer>
        <GrProjects className="icon" />
        <SubText>Front-End</SubText>
      </SubTitleContainer>
      <TitleContainer id="project">
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
          <Tela>
            {projetos.map((projeto, index) => (
              <TelaCard key={index}>
                <div className="picture">
                  <img src={projeto.pic} />
                </div>
                <h3>{projeto.nome}</h3>
                <p
                  title="Visualizar Projeto"
                  onClick={() => lerDescricao(projeto.id)}
                >
                  Descrição
                </p>
              </TelaCard>
            ))}
          </Tela>
          <TelaCardInfo style={{ display: cardInfo ? "flex" : "none" }}>
            {selecionado.map((item, index) => (
              <TelaCardInfoContainer key={index}>
                <div className="spec">
                  <FaFolderOpen className="i" />
                  <IoClose className="i close" onClick={() => fecharCard()} />
                </div>
                <TelaCardInfoContainerPicture>
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {item.galeria.map((card, index) => (
                      <SwiperSlide key={index}>
                        <img src={card.pic} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </TelaCardInfoContainerPicture>
                <TelaCardInfoContainerInfo>
                  <Titulo>{item.nome}</Titulo>
                  <ProjText>
                    <Data>
                      Data:<p>{item.ano}</p>
                    </Data>
                    <Status>
                      Status:
                      <div className="estado">
                        <div
                          className="cubo"
                          style={{ backgroundColor: item.cor }}
                        ></div>
                        <p>{item.estado}</p>
                      </div>
                    </Status>
                    <Descricao>
                      <p>{item.descrição}</p>
                    </Descricao>
                  </ProjText>
                  <ProjLink>
                    <Linguagem>
                      {item.lingua.map((linguagem, index) => (
                        <LinguagemCard key={index} title={linguagem.nome}>
                          <img src={linguagem.pic} />
                        </LinguagemCard>
                      ))}
                    </Linguagem>
                    <a href={item.link} target="_blank" title={item.link}>
                      <Web>Entrar</Web>
                    </a>
                  </ProjLink>
                </TelaCardInfoContainerInfo>
              </TelaCardInfoContainer>
            ))}
          </TelaCardInfo>
          <div className="gear">
            <img src={gear} />
          </div>
        </Painel>
      </Info>
      <Divisor />
    </Container>
  );
}
