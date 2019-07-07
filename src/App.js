import React from 'react'
import { Button } from '@ui'
import { ThemeProvider } from '@features/theme-provider'
import { GlobalStyle } from './GlobalStyle'

export const App = () => {
  return (
    <ThemeProvider>
      <>
        <GlobalStyle />
        <div>
          <Button color="neutral">Button</Button>
          <Button color="success">Button</Button>
          <Button color="warning">Button</Button>
          <Button color="failure">Button</Button>
        </div>
        <div>
          <Button color="neutral" disabled={true}>
            Button
          </Button>
          <Button color="success" disabled={true}>
            Button
          </Button>
          <Button color="warning" disabled={true}>
            Button
          </Button>
          <Button color="failure" disabled={true}>
            Button
          </Button>
        </div>
      </>
    </ThemeProvider>
  )
}
