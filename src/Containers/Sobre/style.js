import styled from "styled-components";
//importar style
import "../../Style/style.css";
import breakpoints from "../../Style/breakpoints";

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
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: var(--dark-blue1);
  padding-top: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//_______________________________INFO__________________________________

export const Info = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-evenly;
  @media ${breakpoints.ml} {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  @media ${breakpoints.s} {
    gap: 3.5rem;
  }
`;

//_______________________________PICTURE__________________________________

export const Picture = styled.div`
  ${box1}
  position: relative;
  z-index: 1;
  padding: 10px;

  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* background: radial-gradient(
      circle,
      rgba(184, 199, 217, 1) 30%,
      rgba(4, 7, 13, 1)
    );*/
    ${box2}
    opacity: 0.1;
  }
  .available {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .signal {
      position: relative;
      z-index: 1;
      height: 5px;
      width: 5px;
      background-color: lime;
      border-radius: 50%;
      &::after {
        position: absolute;
        z-index: -2;
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgb(188, 238, 195);
        border-radius: 50%;
        animation: shine 2s infinite forwards ease-in;
      }
    }
    p {
      color: var(--cinza-blue1);
      font-family: var(--letra-2);
      @media ${breakpoints.xs} {
        font-size: 0.9rem;
      }
    }
  }
  @media ${breakpoints.ml} {
    width: 360px;
  }
  @media ${breakpoints.s} {
    width: 280px;
    height: 280px;
  }
  @media ${breakpoints.xs} {
    width: 75%;
  }
`;

export const Photo = styled.div`
  height: 330px;
  width: auto;
  position: relative;
  z-index: 1;
  margin-bottom: 1rem;
  @media ${breakpoints.s} {
    height: 100%;
    max-height: 200px;
  }
`;
//____________________________TEXT__________________________________

export const Text = styled.div`
  ${box1}
  position: relative;
  z-index: 1;
  padding: 2rem;
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
  @media ${breakpoints.ml} {
    width: 85%;
    padding: 1rem;
  }
  @media ${breakpoints.s} {
    width: 95%;
  }
`;

export const About = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 4rem;
  p {
    font-family: var(--letra-1);
    color: var(--cinza-blue1);
    font-size: 1.2rem;
    @media ${breakpoints.s} {
      font-size: 1rem;
    }
    @media ${breakpoints.xs} {
      font-size: 85%;
    }
  }
  @media ${breakpoints.ml} {
    width: 100%;
    text-align: center;
  }
  @media ${breakpoints.s} {
    margin-bottom: 2.5rem;
  }
`;

//_______________________________SKILL__________________________________

export const Skill = styled.ul`
  display: flex;
  gap: 1rem;
  @media ${breakpoints.ml} {
    justify-content: center;
  }
  @media ${breakpoints.xs} {
    gap: 0.5rem;
  }
`;

export const SkillCard = styled.li`
  position: relative;
  z-index: 1;
  width: 44px;
  height: 44px;
  ${box1};
  border-radius: 5px;
  padding: 5px;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    ${box1};
    opacity: 0.1;
  }
  @media ${breakpoints.xs} {
    width: 30px;
    height: 30px;
  }
`;
