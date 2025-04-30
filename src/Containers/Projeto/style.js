import styled from "styled-components";
//import style
import "../../Style/style.css";
import breakpoints from "../../Style/breakpoints.js";

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
  @media ${breakpoints.s} {
    padding-top: 15vh;
  }
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
  @media ${breakpoints.ml} {
    width: 96%;
  }
  @media ${breakpoints.xs} {
    gap: 1.5rem;
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
  @media ${breakpoints.s} {
    width: 30%;
    font-size: 0.9rem;
  }
  @media ${breakpoints.xs} {
    font-size: 0.8rem;
  }
`;

//______________________________________Painel__________________________________________

export const Painel = styled.div`
  padding-block: 1rem;
  width: 100%;
  position: relative;
  .gear {
    position: absolute;
    height: 100px;
    width: auto;
    bottom: -1%;
    right: 0;
    opacity: 0.05;
    transform: rotate(180deg);
    @media ${breakpoints.s} {
      height: 70px;
    }
  }
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
  @media ${breakpoints.ml} {
    grid-template-columns: repeat(auto-fit, 200px);
  }
  @media ${breakpoints.s} {
    grid-template-columns: repeat(auto-fit, 45%);
  }
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
      @media ${breakpoints.ml} {
      }
    }
  }
  h3 {
    margin-bottom: 2rem;
    @media ${breakpoints.m} {
      font-size: 0.9rem;
    }
    @media ${breakpoints.xs} {
      font-size: 0.79rem;
      margin-bottom: 1.5rem;
    }
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
    @media ${breakpoints.m} {
      font-size: 0.85rem;
    }
    @media ${breakpoints.xs} {
      width: 85%;
      font-size: 0.7rem;
      padding-block: 0.5rem;
      justify-content: center;
    }
  }
`;
//___________________________________________TELACard-Info____________________________________

//tela tranparent
export const TelaCardInfo = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 8;
  background-color: transparent;
  backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

export const TelaCardInfoContainer = styled.div`
  height: 460px;
  transition: 0.5s;
  width: 95%;
  position: absolute;
  z-index: 8;
  display: flex;
  padding: 3rem 2rem 1rem 2rem;
  background-color: var(--dark-blue1);
  transition: 0.7s;
  border: 1px solid rgb(216, 231, 242, 0.2);
  box-shadow: 0px 2px 1px 0px inset rgb(207, 231, 255, 0.2);
  border-radius: 20px;
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
      @media ${breakpoints.xs} {
        font-size: 1rem;
      }
    }
    .close {
      cursor: pointer;
      font-size: 1.3rem;
    }
  }
  @media ${breakpoints.ml} {
    width: 100%;
    padding-inline: 0.5rem;
    height: 360px;
    justify-content: space-evenly;
  }
  @media ${breakpoints.m} {
    flex-direction: column;
    height: 500px;
    align-items: center;
    gap: 1.8rem;
    padding-top: 3.5rem;
  }
`;

//_______________________________CONTAINER PICTURE-INFO______________________________________
export const TelaCardInfoContainerPicture = styled.div`
  position: relative;
  z-index: 2;
  width: 60%;
  height: 100%;
  transition: 0.5s;
  .swiper {
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
  @media ${breakpoints.ml} {
    width: 50%;
  }
  @media ${breakpoints.m} {
    width: 320px;
  }
  @media ${breakpoints.xs} {
    width: 90%;
    height: 280px;
  }
  @media ${breakpoints.xxs} {
    width: 90%;
    height: 230px;
  }
`;

//_______________________________CONTAINER TEXT-INFO______________________________________
export const TelaCardInfoContainerInfo = styled.div`
  position: relative;
  z-index: 2;
  width: 40%;
  padding-inline: 1rem;
  @media ${breakpoints.ml} {
    overflow-y: scroll;
    padding-inline: 0;
  }
  @media ${breakpoints.ml} {
    width: 100%;
    height: 300px;
    text-align: center;
  }
`;
