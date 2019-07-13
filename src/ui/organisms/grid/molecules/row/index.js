// @flow
import * as React from 'react'
import styled, { css } from 'styled-components'
import { StyledCol } from '../col'
import { useStore } from 'effector-react'
import { $breakpoint, type Breakpoint } from '../../../../lib/models/breakpoint'
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

const defaultGutters = {
  X: true,
  Y: false
}

type Props = {
  guttersX?: UseGutters,
  guttersY?: UseGutters,
  children: React.Node
}

export const Row = ({ guttersX, guttersY, children, ...rest }: Props) => {
  const breakpoint = useStore($breakpoint)

  const isX = React.useMemo(
    () => isGuttersUsed(guttersX || defaultGutters.X, breakpoint),
    [guttersX, breakpoint]
  )

  const isY = React.useMemo(
    () => isGuttersUsed(guttersY || defaultGutters.Y, breakpoint),
    [guttersY, breakpoint]
  )

  return (
    <StyledRow useGuttersX={isX} useGuttersY={isY} {...rest}>
      {children}
    </StyledRow>
  )
}

Row.defaultProps = {
  guttersX: defaultGutters.X,
  guttersY: defaultGutters.Y
}
