// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStore } from 'effector-react'
import { $breakpoint, type Breakpoint } from '../../../../lib/models'
import { containerMaxWidths } from '../../../../constants'

const getMaxWidth = (breakpoint: Breakpoint, isFluid: boolean) => {
  if (isFluid) return '100%'
  return containerMaxWidths[breakpoint]
}

const StyledContainer = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
`

type Props = {
  fluid: boolean,
  children: React.Node
}

export const Container = ({ fluid, children, ...rest }: Props) => {
  const breakpoint = useStore($breakpoint)

  const maxWidth = getMaxWidth(breakpoint, fluid)

  return (
    <StyledContainer maxWidth={maxWidth} {...rest}>
      {children}
    </StyledContainer>
  )
}

Container.propTypes = {
  fluid: PropTypes.bool.isRequired
}

Container.defaultProps = {
  fluid: false
}
