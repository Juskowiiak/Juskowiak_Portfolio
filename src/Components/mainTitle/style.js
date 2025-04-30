import styled from "styled-components";
//import styles
import "../../Style/style.css";
import breakpoints from "../../Style/breakpoints";

export const TitleContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 8rem;
  color: var(--cinza-blue1);
  font-size: 1.4rem;
  @media ${breakpoints.xs} {
    font-size: 1.1rem;
    margin-bottom: 6.5rem;
  }
`;

export const Maintext1 = styled.h2`
  font-family: var(--letra-1);
  font-weight: 400;
`;

export const Maintext2 = styled.h2`
  font-family: var(--letra-2);
  font-weight: 400;
  font-style: italic;
`;
