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

export default function Projeto() {
  //mapear todos os projetos, filtrar objeto selecionado
  const [projetos, setProjetos] = useState(Laptops);
  const [selecionado, setSelecionado] = useState(Laptops);

  //trocar categoria pratica/projeto/trabalho
  function recebeOpcao(tipo) {
    const novoMap = Laptops.filter((projeto) => projeto.tipo == tipo);
    setProjetos(novoMap);
  }
  //abrir descriçao
  function lerDescricao(projeto) {
    const procura = Laptops.filter((item) => item.id == projeto);
    setSelecionado(procura);
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
          <TelaCardInfo>
            {selecionado.map((item, index) => (
              <TelaCardInfoContainer key={index}>
                <div className="spec"></div>
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
                  <h3 className="project-title">{item.nome}</h3>
                  <p className="project-type"></p>
                </TelaCardInfoContainerInfo>
              </TelaCardInfoContainer>
            ))}
          </TelaCardInfo>
        </Painel>
      </Info>

      <Divisor />
    </Container>
  );
}
