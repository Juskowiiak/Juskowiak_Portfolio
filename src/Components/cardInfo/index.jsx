import {
  Data,
  Descricao,
  Linguagem,
  ProjLink,
  ProjText,
  Status,
  Titulo,
  Web,
} from "./style";

export default function CardInfo(Children) {
  return (
    <>
      <Titulo>{Children}</Titulo>
      <ProjText>
        <Data>{Children}</Data>
        <Status>{Children}</Status>
        <Descricao>{Children}</Descricao>
      </ProjText>
      <ProjLink>
        <Linguagem>{Children}</Linguagem>
        <Web>{Children}</Web>
      </ProjLink>
    </>
  );
}
