import styled from "styled-components";
//import styles
import "../../Style/style.css";
import breakpoints from "../../Style/breakpoints";

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-color: var(--dark-blue1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20vh;
  padding-bottom: 1rem;
  @media ${breakpoints.xs} {
    padding-top: 12vh;
  }
`;

//__________________________________LOGO________________________________________

export const Logobox = styled.div`
  position: relative;
  z-index: 2;
  width: 100px;
  height: 100px;
  border-radius: 15px;
  padding: 8px;
  margin-bottom: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(182deg, rgb(25, 28, 31), rgb(38, 44, 63));
  box-shadow: 0px 3px 5px rgba(60, 121, 173, 0.37);
  @media ${breakpoints.xxs} {
    margin-bottom: 6rem;
  }
`;

export const Logo = styled.div`
  position: relative;
  z-index: 2;
  background-color: var(--darkblueblack);
  border-radius: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 70%;
    top: 30%;
    border-radius: 0 0 15px 15px;
    box-shadow: 0px 1px 1px rgba(60, 121, 173, 0.37);
    z-index: -3;
    border: 0;
  }
  img {
    position: relative;
    z-index: 3;
    border-radius: 50%;
    padding: 5px;
    background-color: #fff;
  }
`;

//_______________________________TITLE___________________________________________

export const HomeTitle = styled.h1`
  position: relative;
  z-index: 2;
  font-family: var(--letra-1);
  font-weight: 600;
  font-size: 3.6rem;
  transition: 0.5s;
  background: linear-gradient(
    360deg,
    var(--cinza-blue2) 48%,
    var(--cinza-blue1) 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media ${breakpoints.ml} {
    font-size: 2.8rem;
  }
  @media ${breakpoints.m} {
    width: 400px;
    text-align: center;
  }
  @media ${breakpoints.s} {
    font-size: 2.1rem;
  }
  @media ${breakpoints.xs} {
    font-size: 1.6rem;
    width: 300px;
  }
  @media ${breakpoints.xxs} {
    font-size: 1.4rem;
  }
`;

//________________________________ME__________________________________________

export const Me = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  gap: 1.2rem;
  align-items: center;
  margin-block: 2rem 5rem;
  p {
    font-family: var(--letra-2);
    color: var(--cinza-blue1);
    font-size: 1.2rem;
    @media ${breakpoints.xs} {
      font-size: 1rem;
    }
  }
  @media ${breakpoints.xs} {
    margin-block: 3rem 6rem;
  }
`;

export const Signal = styled.div`
  position: relative;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: rgb(147, 177, 233);
  &::after {
    position: absolute;
    z-index: -2;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgb(232, 236, 243);
    border-radius: 50%;
    animation: shine 2s infinite forwards ease-in;
  }
  @keyframes shine {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(6);
      opacity: 0;
    }
  }
`;
//_____________________________________MEDIA_____________________________________

export const Media = styled.ul`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const MediaIcon = styled.li`
  padding-inline: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: var(--cinza-blue2);
    font-size: 1.8rem;
    height: 100%;
    transition: 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${breakpoints.xs} {
      font-size: 1.45rem;
    }
  }

  &:not(:last-child) {
    border-right: 1px solid var(--cinza-blue3);
  }
`;

//_____________________________BARRA__________________________________

export const Barra = styled.div`
  position: absolute;
  z-index: 3;
  width: 50%;
  height: 3px;
  left: 50%;
  bottom: -10.5vh;
  transform: translateX(-50%);
  border-radius: 50%;
  background-color: var(--cinza-blue3);
  opacity: 0.4;
`;
