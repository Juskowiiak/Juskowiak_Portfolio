import styled from "styled-components";
//importar style
import "../../Style/style.css";
import breakpoints from "../../Style/breakpoints";

export const Divisor = styled.div`
  height: 165px;
  width: 100%;
  position: relative;
  z-index: 2;
  bottom: 0;
  overflow-y: hidden;
  margin-top: 4rem;
  background-color: var(--dark-blue1);
  &::after {
    position: absolute;
    content: "";
    width: 30%;
    height: 50px;
    left: 50%;
    bottom: -50px;
    transform: translateX(-50%);
    border-radius: 50%;
    box-shadow: 0px -40px 90px var(--cinza-blue2);
    @media ${breakpoints.s} {
      width: 40%;
    }
  }
  &::before {
    position: absolute;
    content: "";
    width: 75%;
    height: 3px;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: var(--cinza-blue3);
    opacity: 0.25;
    @media ${breakpoints.s} {
      width: 80%;
      height: 2.5px;
    }
  }
  @media ${breakpoints.m} {
    margin-top: 10rem;
  }
`;
