import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  box-sizing:border-box;
  padding:0;
  margin:0;
  text-decoration:none;
  list-style:none;
}

body{
  width:100%;
  height:100%;
  scroll-behavior:smooth !important;
  overflow-x:hidden;
}

img{
  width:100%;
  height:100%;
}
`;
