import { TitleContainer, Maintext1 } from "./style";

export default function MainTitle(Children) {
  return (
    <TitleContainer>
      <Maintext1>{Children}</Maintext1>
    </TitleContainer>
  );
}
