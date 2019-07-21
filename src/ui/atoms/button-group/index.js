// @flow
import * as React from 'react'
import styled from 'styled-components'
import { type Properties as CSS } from 'csstype'

const StyledButtonGroup = styled.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`

const ButtonGroupInner = styled.div`
  margin-bottom: -8px;
`

type Props = {
  style?: CSS<string | number>,
  children: React.Node
}

export const ButtonGroup = ({ children, ...rest }: Props) => {
  return (
    <StyledButtonGroup {...rest}>
      <ButtonGroupInner>{children}</ButtonGroupInner>
    </StyledButtonGroup>
  )
}
