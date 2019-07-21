// @flow
import * as React from 'react'
import styled from 'styled-components'
import { type Properties as CSS } from 'csstype'

const StyledInputGroup = styled.div`
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`

const InputGroupInner = styled.div`
  margin-bottom: -8px;
`

type Props = {
  style?: CSS<string | number>,
  children: React.Node
}

export const InputGroup = ({ children, ...rest }: Props) => {
  return (
    <StyledInputGroup {...rest}>
      <InputGroupInner>{children}</InputGroupInner>
    </StyledInputGroup>
  )
}
