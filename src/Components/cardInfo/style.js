import styled from "styled-components";

//importar style
import "../../Style/style.css";

export const Titulo = styled.h3`
  color: var(--cinza-blue1);
  font-family: var(--letra-1);
  font-size: 1.8rem;
  transition: 0.5s;
  letter-spacing: 1.2px;
`;

//________________________________________________________

export const ProjText = styled.div`
  margin-block: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Data = styled.h5`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--cinza-blue1);
  font-family: var(--letra-1);
`;

export const Status = styled.h5`
  color: var(--cinza-blue1);
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
`;

export const Descricao = styled.h5`
  color: var(--cinza-blue1);
  font-family: var(--letra-1);

  p {
    font-size: 0.9rem;
    line-height: 1.2rem;
  }
`;

//________________________________________________________
export const ProjLink = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Web = styled.h5`
  border: 1px solid orange;
`;

export const Linguagem = styled.ul`
  border: 1px solid red;
  width: 100%;
`;

export const LinguagemCard = styled.li`
  border: 1px solid yellow;
  width: 50px;
  height: 50px;
`;
