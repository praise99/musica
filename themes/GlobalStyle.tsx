import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    margin:0;
    overflow-x:hidden ;
    scroll-behavior: smooth;
    font-family:'Lato' ;
    padding: 0px;

  }
  html{
  scroll-behavior: smooth;
}

/* @font-face {
  font-family: "Lato";
  font-weight: 900;
  src: url("../assets/fonts/Lato/Lato-Black.ttf");
} */
/* @font-face {
  font-family: "Lato";
  font-weight: 700;
  src: url("..assets/fonts/Lato/Lato-Bold.ttf");
} */
@font-face {
  font-family: "Lato";
  src: url("..assets/fonts/Lato/Lato-Semibold.ttf");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Lato";
  font-weight: 500;
  src: url("..assets/fonts/Lato/Lato-Medium.ttf");
}

/* @font-face {
  font-family: "Lato";
  font-weight: 400;
  src: url("..assets/fonts/Lato/Lato-Regular.ttf");
} */
/* 
@font-face {
  font-family: "Lato";
  font-weight: 300;
  src: url("..assets/fonts/Lato/Lato-Light.ttf");
} */
@font-face {
  font-family: "Lato";
  font-weight: 100;
  src: url("../assets/fonts/Lato/Lato-Thin.ttf");
}

`;
