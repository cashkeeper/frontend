// @flow
import * as React from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { useStore } from 'effector-react'
import { themes } from '@ui'
import { $theme } from './model'

type Props = {
  children: React.Node
}

export const ThemeProvider = ({ children }: Props) => {
  const themeName = useStore($theme)
  const theme = themes[themeName]

  return <SCThemeProvider theme={theme}>{children}</SCThemeProvider>
}
