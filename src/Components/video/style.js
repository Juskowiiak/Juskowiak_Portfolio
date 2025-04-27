import styled from "styled-components";
//importar style
import "../../Style/style.css";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 110vh;
  width: 100%;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.1;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: 50% 50%;
  }
`;

export const Media1 = styled.div`
  position: absolute;
  width: 100%;
  height: 110vh;
  top: 0;
  left: 0;
`;

export const Media2 = styled.div`
  position: absolute;
  width: 100%;
  height: 15vh;
  bottom: 0;
  left: 0;
  border: 1px solid red;
  video {
    object-position: 100% 100%;
  }
`;
