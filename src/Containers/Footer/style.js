import styled from "styled-components";
//importar style
import "../../Style/style.css";
import breakpoints from "../../Style/breakpoints";

export const Container = styled.div`
  width: 90%;
  margin-top: 5rem;
  margin-inline: auto;
  background-color: var(--dark-blue1);
  padding-block: 1rem 2rem;
  text-align: center;
  p {
    color: var(--cinza-blue2);
    font-family: var(--letra-1);
    font-size: 0.8rem;
    @media ${breakpoints.xs} {
      font-size: 0.65rem;
    }
  }
  @media ${breakpoints.xs} {
    margin-top: 1rem;
  }
`;
