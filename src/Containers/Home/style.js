import styled from "styled-components";
//import styles
import "../../Style/style.css";

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100vh;
  border: 1px solid red;
  background-color: var(--dark-blue1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20vh;
  padding-bottom: 1rem;
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
  background: linear-gradient(182deg, rgba(8, 9, 10, 1), rgba(16, 19, 28, 1));
  box-shadow: 0px 3px 5px rgba(60, 121, 173, 0.37);
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
  background: linear-gradient(
    360deg,
    var(--cinza-blue2) 42%,
    var(--dark-blue1) 100%
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

//________________________________ME__________________________________________

export const Me = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  margin-block: 2rem 4rem;
  p {
    font-family: var(--letra-2);
    color: var(--cinza-blue1);
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
    animation: shine 3s infinite forwards ease-in;
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
  }

  &:not(:last-child) {
    border-right: 1px solid var(--cinza-blue3);
  }
`;
