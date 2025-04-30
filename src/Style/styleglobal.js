import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  box-sizing:border-box;
  padding:0;
  margin:0;
  text-decoration:none;
  list-style:none;
}
html{
  width:100%;
  scroll-behavior:smooth !important;
}
body{
  width:100%;
  height:100%;
  scroll-behavior:smooth !important;
  overflow-x:hidden;
  background-color:rgb(4, 7, 13);
}

img{
  width:100%;
  height:100%;
}
`;
