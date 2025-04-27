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
  width: 80%;
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
  padding-block: 0.5rem;
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

export const Mensg = styled.div`
  border: 1px solid red;
  margin-bottom: 2rem;
  color: var(--cinza-blue1);
  display: flex;
  gap: 0.5rem;
  width: 80%;
  margin-inline: auto;
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
    ${box2}
    opacity:.1;
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
