// @flow
import * as React from 'react'
import styled from 'styled-components'
import { useStore } from 'effector-react'
import { $breakpoint, type Breakpoint } from '../../../../lib/models/breakpoint'
import { containerMaxWidths } from '../../../../constants'

const getMaxWidth = (breakpoint: Breakpoint) => {
  return containerMaxWidths[breakpoint]
}

const StyledContainer = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth};
  padding-left: 16px;
  padding-right: 16px;
`

type Props = {
  children: React.Node
}

export const Container = ({ children, ...rest }: Props) => {
  const breakpoint = useStore($breakpoint)

  const maxWidth = getMaxWidth(breakpoint)

  return (
    <StyledContainer maxWidth={maxWidth} {...rest}>
      {children}
    </StyledContainer>
  )
}
