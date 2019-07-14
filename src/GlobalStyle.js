import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    font-family: "Fira Sans", sans-serif;
    color: ${props => props.theme.general.colors.text};
    background-color: ${props => props.theme.general.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
