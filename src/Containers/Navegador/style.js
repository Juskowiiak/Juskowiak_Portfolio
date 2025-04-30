import styled from "styled-components";
//import styles
import "../../Style/style.css";
import breakpoints from "../../Style/breakpoints";

export const Container = styled.div`
  position: fixed;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  width: 100%;
  top: 0;
  left: 0;
  padding-block: 0.5rem;
  padding-inline: 2rem;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: var(--darkblueblack);
    opacity: 0.85;
  }
  .abrir {
    top: 10vh;
  }
`;
/*_______________________________________________________________ */

export const Logo = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 7px;
  background: linear-gradient(193deg, #fff 32%, var(--cinza-blue2) 100%);
`;

/*_______________________________________________________________ */

export const Menu = styled.ul`
  position: relative;
  z-index: 1;
  border: 1px solid var(--cinza-blue4);
  border-radius: 20px;
  display: flex;
  height: 100%;
  align-items: center;
  padding-inline: 1rem;
  @media ${breakpoints.m} {
    position: absolute;
    top: -40vh;
    left: 0;
    height: 40vh;
    width: 100%;
    border-radius: 0;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    background-color: transparent;
    backdrop-filter: blur(10px);
    transition: 1s;
  }
`;

export const MenuCard = styled.li`
  a {
    font-family: var(--letra-1);
    color: var(--cinza-blue1);
    padding-inline: 1rem;
    transition: 0.5s;

    &:hover {
      color: var(--cinza-blue2);
    }
  }
  @media ${breakpoints.m} {
    padding-block: 1rem;
    position: relative;
    z-index: 2;
    width: 100%;
    text-align: center;
    border-radius: 10px;
    background-color: var(--darkblueblack);
    transition: 0.7s;
    border: 1px solid rgb(216, 231, 242, 0.2);
    box-shadow: 0px 2px 1px 0px inset rgb(207, 231, 255, 0.2);
  }
`;
//____________________________________________
export const MenuTogle = styled.div`
  color: var(--cinza-blue1);
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  z-index: 5;
  display: none;
  transition: 0.6s;
  &:hover {
    color: var(--cinza-blue2);
  }
  @media ${breakpoints.m} {
    display: flex;
  }
`;
