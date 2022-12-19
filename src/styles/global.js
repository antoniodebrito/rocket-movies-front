import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
    text-decoration: none;
  }

  body {
    background: ${({theme}) => theme.COLORS.BACKGROUND_600};
    height: 100vh;
    width: 100%;
  }

 

  
`