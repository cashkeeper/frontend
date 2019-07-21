// @flow
import * as React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { useStore } from 'effector-react'
import { type Properties as CSS } from 'csstype'
import { StyledCol } from '../col'
import { $breakpoint, type Breakpoint } from '../../../../lib/models'
import { breakpointPriorities as priorities } from '../../../../constants'

type BreakpointComparison = '<sm' | '<md' | '<lg' | '<xl'
type UseGutters = boolean | Breakpoint | BreakpointComparison

const isGuttersUsed = (gutters: UseGutters, breakpoint: Breakpoint) => {
  // boolean
  if (typeof gutters === 'boolean') return gutters

  // breakpoint
  if (gutters.length === 2) return gutters === breakpoint

  // comparison
  const target = gutters.slice(1)
  return priorities[breakpoint] < priorities[target]
}

const withoutGuttersX = css`
  & > ${StyledCol} {
    padding-left: 0;
    padding-right: 0;
  }
`

const withGuttersY = css`
  & > ${StyledCol} {
    margin-bottom: 24px;
  }
`

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -16px;
  margin-right: -16px;

  ${props => !props.useGuttersX && withoutGuttersX}
  ${props => props.useGuttersY && withGuttersY}
`

type Props = {
  guttersX?: UseGutters,
  guttersY?: UseGutters,
  style?: CSS<string | number>,
  children: React.Node
}

export const Row = ({
  guttersX = true,
  guttersY = false,
  children,
  ...rest
}: Props) => {
  const breakpoint = useStore($breakpoint)

  const isX = React.useMemo(() => isGuttersUsed(guttersX, breakpoint), [
    guttersX,
    breakpoint
  ])

  const isY = React.useMemo(() => isGuttersUsed(guttersY, breakpoint), [
    guttersY,
    breakpoint
  ])

  return (
    <StyledRow useGuttersX={isX} useGuttersY={isY} {...rest}>
      {children}
    </StyledRow>
  )
}

const guttersType = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  PropTypes.oneOf(['<sm', '<md', '<lg', '<xl'])
])

Row.propTypes = {
  guttersX: guttersType,
  guttersY: guttersType
}
