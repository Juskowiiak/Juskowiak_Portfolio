import styled from "styled-components";
//import style
import "../../Style/style.css";

//___________________________VARIAVEIS____________________________
const box1 = `
  border: 1px solid rgb(216, 231, 242, 0.2);
  box-shadow: 0px 2px 1px 0px inset rgb(207, 231, 255, 0.2);
  border-radius:20px;
  background: var(--dark-blue1);
  `;

const box2 = `
 border-radius:20px;
  background: linear-gradient(
      36deg,
      rgba(4, 7, 13, 1) 60%,
      rgba(184, 199, 217, 1) 97%
    );
  `;

//________________________CONTAINER__________________________________

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 25vh;
  background-color: var(--dark-blue1);
`;

export const Info = styled.div`
  width: 90%;
  height: 100%;
  position: relative;
  z-index: 1;
  ${box1}
  background-color: var(--dark-blue1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 1.5rem 0.5rem;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    ${box2}
    opacity:.1;
  }
`;

//______________________________________OPCOES__________________________________________

export const Opcoes = styled.ul`
  width: 100%;
  margin-inline: auto;
  display: flex;
  justify-content: space-around;
`;

export const OpcoesCard = styled.li`
  width: 30%;
  padding-block: 0.75rem;
  color: var(--cinza-blue1);
  font-family: var(--letra-2);
  letter-spacing: 1.15px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 400;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.5s;
  position: relative;
  z-index: 1;
  ${box1}
  background-color:var(--dark-blue3);
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    ${box2}
    opacity:.1;
  }
  &:hover {
    background-color: var(--dark-blue1);
    letter-spacing: 1.25px;
  }
`;

//______________________________________Painel__________________________________________

export const Painel = styled.div`
  padding-block: 1rem;
  width: 100%;
  position: relative;
`;

//___________________________________________TELA____________________________________

export const Tela = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 230px);
  grid-template-rows: auto;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  gap: 2rem 1rem;
  justify-content: space-evenly;
  padding-inline: 5px;
`;

export const TelaCard = styled.ul`
  border: 1px solid yellow;
  height: auto;
  padding: 15px 10px;
  text-align: center;
  color: var(--cinza-blue1);
  font-family: var(--letra-1);
  ${box1}
  position: relative;
  z-index: 1;
  background: var(--dark-blue2);
  box-shadow: 0px 2px 1px 0px inset var(--cinza-blue2);

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(
      circle,
      rgba(184, 199, 217, 1) 6%,
      rgba(4, 7, 13, 1)
    );
    opacity: 0.1;
  }
  .picture {
    margin-bottom: 1rem;
    img {
      max-height: 120px;
      width: auto;
      max-width: 100%;
    }
  }
  h3 {
    margin-bottom: 2rem;
  }
  p {
    position: relative;
    z-index: 1;
    cursor: pointer;
    background-color: var(--darkblueblack);
    padding: 0.5rem 1rem;
    border-radius: 10px;
    display: inline-flex;
    transition: 0.5s;
    &:hover {
      background-color: var(--cinza-blue3);
    }
  }
`;
//___________________________________________TELACard-Info____________________________________

//tela tranparent
export const TelaCardInfo = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

export const TelaCardInfoContainer = styled.div`
  border: 1px solid red;
  height: 460px;
  transition: 0.5s;
  width: 85%;
  position: absolute;
  z-index: 2;
  border-radius: 20px;
  display: flex;
  padding: 3rem 2rem 1rem 2rem;
  background-color: var(--dark-blue1);
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    ${box2}
    opacity: 0.1;
  }
  .spec {
    border: 1px solid orange;
    width: 94%;
    position: absolute;
    z-index: 2;
    top: 2%;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .i {
      color: var(--cinza-blue1);
      font-size: 1.2rem;
    }
    .close {
      cursor: pointer;
      font-size: 1.3rem;
    }
  }
`;

//_______________________________CONTAINER PICTURE-INFO______________________________________
export const TelaCardInfoContainerPicture = styled.div`
  position: relative;
  z-index: 2;
  border: 1px solid yellow;
  width: 60%;
  height: 100%;
  .swiper {
    border: 1px solid red;
    width: 100%;
    height: 100%;
  }
  .swiper-slide img {
    position: relative;
    z-index: 2;
    display: block;
    width: 100%;
    height: 100%;
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--cinza-blue3);
    width: 30px;
  }
`;

//_______________________________CONTAINER TEXT-INFO______________________________________
export const TelaCardInfoContainerInfo = styled.div`
  position: relative;
  z-index: 2;
  border: 1px solid blue;
  width: 40%;
  padding-inline: 1rem;
`;
