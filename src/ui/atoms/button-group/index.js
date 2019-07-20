// @flow
import * as React from 'react'
import styled from 'styled-components'

const StyledButtonGroup = styled.div`
  margin-bottom: -8px;
`

type Props = {
  children: React.Node
}

export const ButtonGroup = ({ children, ...rest }: Props) => {
  return <StyledButtonGroup {...rest}>{children}</StyledButtonGroup>
}
