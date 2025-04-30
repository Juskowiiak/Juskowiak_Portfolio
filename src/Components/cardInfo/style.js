import styled from "styled-components";

//importar style
import "../../Style/style.css";
import breakpoints from "../../Style/breakpoints";

export const Titulo = styled.h3`
  color: var(--cinza-blue1);
  font-family: var(--letra-1);
  font-size: 1.8rem;
  transition: 0.5s;
  letter-spacing: 1.2px;
  @media ${breakpoints.xs} {
    font-size: 1.4rem;
  }
`;

//________________________________________________________

export const ProjText = styled.div`
  margin-block: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media ${breakpoints.ml} {
    align-items: center;
  }
`;

export const Data = styled.h5`
  display: flex;
  font-weight: 400;
  align-items: center;
  gap: 6px;
  color: var(--cinza-blue1);
  font-family: var(--letra-1);
  @media ${breakpoints.xs} {
    font-size: 0.75rem;
  }
`;

export const Status = styled.h5`
  color: var(--cinza-blue1);
  font-weight: 400;
  font-family: var(--letra-1);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  .estado {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .cubo {
    height: 10px;
    width: 10px;
  }
  @media ${breakpoints.xs} {
    font-size: 0.7rem;
  }
`;

export const Descricao = styled.h5`
  color: var(--cinza-blue1);
  font-family: var(--letra-1);
  p {
    font-size: 0.9rem;
    line-height: 1.2rem;
    font-weight: 400;
    @media ${breakpoints.xs} {
      font-size: 0.8rem;
    }
  }
`;

//________________________________________________________
export const ProjLink = styled.div`
  text-align: center;
  a {
    color: #fff;
    font-family: var(--letra-1);
    transition: 0.6s;
    &:hover {
      color: var(--cinza-blue1);
    }
  }
`;

export const Web = styled.h5`
  display: inline;
  padding: 0.75rem 1.2rem;
  border-radius: 10px;
  background-color: var(--cinza-blue2);
  @media ${breakpoints.ml} {
    padding: 0.5rem 1.2rem;
  }
`;

export const Linguagem = styled.ul`
  width: 100%;
  display: flex;
  gap: 8px;
  margin-bottom: 4rem;
  @media ${breakpoints.m} {
    justify-content: center;
    margin-bottom: 3rem;
  }
`;

export const LinguagemCard = styled.li`
  width: 30px;
  height: 30px;
  @media ${breakpoints.xs} {
    width: 24px;
    height: 24px;
  }
`;
