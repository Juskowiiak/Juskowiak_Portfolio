import { Icon, SubText, SubTitleContainer } from "./style";
//importar icons
import { FaUser } from "react-icons/fa";

export default function SubTitle(Children) {
  return (
    <SubTitleContainer>
      <Icon>
        <FaUser />
      </Icon>
      <SubText>{Children}</SubText>
    </SubTitleContainer>
  );
}
