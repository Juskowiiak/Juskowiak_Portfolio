import styled from "styled-components";
//import styles
import "../../Style/style.css";

export const Container = styled.div`
  position: fixed;
  z-index: 5;
  border: 2px solid var(--cinza-blue4);
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
    opacity: 0.5;
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
`;
