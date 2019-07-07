import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    height: 100%;
  }

  html {
    font-size: 16px;
  }

  body {
    margin: 50px;
    font-family: "Ubuntu", -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen", "Cantarell",
      "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
`
