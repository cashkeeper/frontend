// @flow
import * as React from 'react'
import styled from 'styled-components'

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
  children: React.Node
}

export const InputGroup = ({ children, ...rest }: Props) => {
  return (
    <StyledInputGroup {...rest}>
      <InputGroupInner>{children}</InputGroupInner>
    </StyledInputGroup>
  )
}
