import styled from "styled-components";
//importar style
import "../../Style/style.css";
import breakpoints from "../../Style/breakpoints";

export const SubTitleContainer = styled.div`
  border: 1px solid var(--cinza-blue2);
  border-radius: 15px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.7rem;
  background-color: var(--darkblueblack);
  margin-bottom: 0.5rem;
  .icon {
    color: var(--cinza-blue1);
    font-size: 0.9rem;
  }
  @media ${breakpoints.xs} {
    margin-bottom: 0.8rem;
  }
`;

export const SubText = styled.p`
  color: var(--cinza-blue1);
  font-family: var(--letra-1);
  letter-spacing: 1.2px;
  font-size: 0.9rem;
`;
